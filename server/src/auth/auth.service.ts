import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { UserService } from 'user/user.service';
import { User } from 'user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';

interface GenTok {
  refreshToken: string;
  accessToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto): Promise<User> {
    const user = await this.validateUser(userDto);
    const { refreshToken, accessToken } = await this.generateToken(user);

    user.accessToken = accessToken;
    user.refreshToken = refreshToken;

    await user.save();
    return user;
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Пользователь с таким email существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const activationLink = uuid.v4();
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
      activationLink,
    });
    // await this.sendConfirmMail(userDto, `${process.env.API_URL}/api/users/activate/${activationLink}`)

    const tokens = await this.generateToken(user);
    user.refreshToken = tokens.refreshToken;
    user.accessToken = tokens.accessToken;
    await user.save();
    return user;
  }

  async logout(refreshToken: string) {
    const user = await this.userService.getUserByRefreshToken(refreshToken);
    user.refreshToken = '';
    return await user.save();
    if (!user) {
      throw new HttpException('Удаление не получилось', HttpStatus.BAD_REQUEST);
    }
  }

  async refresh(refreshToken: any) {
    if (!refreshToken) {
      throw new HttpException('Нет токена', HttpStatus.UNAUTHORIZED);
    }
    const userData = await this.validateToken(refreshToken);
    const tokenFromDb = await this.userService.getUserByRefreshToken(
      refreshToken,
    );
    if (!userData || !tokenFromDb) {
      throw new HttpException(
        'Пользователь не авторизован',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const user = await this.userService.getUserByEmail(userData.email);
    const tokens = await this.generateToken(user);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    user.accessToken = tokens.accessToken;
    await user.save();
    return user;
  }

  private validateToken(token: string) {
    try {
      const userData = this.jwtService.verify(token, {
        secret: process.env.JWT_ACCESS_SECRET,
      });
      return userData;
    } catch (e) {
      return null;
    }
  }

  private async generateToken(user: User): Promise<GenTok> {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: '24 h',
      secret: process.env.JWT_ACCESS_SECRET,
    });
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '30 d',
      secret: process.env.JWT_ACCESS_SECRET,
    });
    return { refreshToken, accessToken };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({
        message: 'Пользователь с таким email не существует',
      });
    }
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (!passwordEquals) {
      throw new UnauthorizedException({ message: 'Неккоректный пароль' });
    }
    return user;
  }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleService } from 'role/role.service';
import { User } from 'user/entities/user.entity';
import { where } from 'sequelize';
import { BanUserDto } from 'user/dto/ban-user.dto';
import { FavoriteService } from 'favorite/favorite.service';
import { PropertyService } from 'property/property.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService,
    private favoriteService: FavoriteService,
    private propertyService: PropertyService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('ADMIN');
    const favorite = await this.favoriteService.createOneFavorite(user.id);
    const property = await this.propertyService.createUserProperty(user.id);
    await user.$set('roles', [role.id]);
    await user.$set('favorite', [favorite.id]);
    await user.$set('property', [property.id]);
    user.roles = [role];
    user.favorite = favorite;
    user.property = property;
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async addRole(dto: any) {
    const user = await this.userRepository.findByPk(dto.userId);
    const role = await this.roleService.getRoleByValue(dto.value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  // async ban(dto: BanUserDto) {
  //   const user = await this.userRepository.findByPk(dto.userId);
  //   if (!user) {
  //     throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
  //   }
  //   user.banned = true;
  //   user.banReason = dto.banReason;
  //   await user.save();
  //   return user;
  // }
  async getUserByRefreshToken(refreshToken: string) {
    const user = await this.userRepository.findOne({
      where: { refreshToken: refreshToken },
      include: { all: true },
    });
    if (!user) {
      throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}

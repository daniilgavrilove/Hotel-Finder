import { CreateUserDto } from 'user/dto/create-user.dto';
import { UserService } from 'user/user.service';
import { User } from 'user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(userDto: CreateUserDto): Promise<User>;
    registration(userDto: CreateUserDto): Promise<User>;
    logout(refreshToken: string): Promise<User>;
    refresh(refreshToken: any): Promise<User>;
    private validateToken;
    private generateToken;
    private validateUser;
}

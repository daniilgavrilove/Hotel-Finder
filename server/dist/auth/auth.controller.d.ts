import { AuthService } from './auth.service';
import { Response, Request } from 'express';
import { User } from 'user/entities/user.entity';
import { CreateUserDto } from 'user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userDto: CreateUserDto, response: Response): Promise<User>;
    registration(userDto: CreateUserDto, response: Response): Promise<User>;
    logout(request: Request, response: Response): Promise<any>;
    refresh(request: Request, response: Response, userDto: CreateUserDto): Promise<User>;
}

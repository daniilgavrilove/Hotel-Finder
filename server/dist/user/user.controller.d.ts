import { User } from 'user/entities/user.entity';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { UserService } from 'user/user.service';
import { AddRoleDto } from 'user/dto/add-role.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    addRole(dto: AddRoleDto): Promise<any>;
}

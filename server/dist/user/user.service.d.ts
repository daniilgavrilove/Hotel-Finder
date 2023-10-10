import { CreateUserDto } from './dto/create-user.dto';
import { RoleService } from 'role/role.service';
import { User } from 'user/entities/user.entity';
import { FavoriteService } from 'favorite/favorite.service';
import { PropertyService } from 'property/property.service';
export declare class UserService {
    private userRepository;
    private roleService;
    private favoriteService;
    private propertyService;
    constructor(userRepository: typeof User, roleService: RoleService, favoriteService: FavoriteService, propertyService: PropertyService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    addRole(dto: any): Promise<any>;
    getUserByRefreshToken(refreshToken: string): Promise<User>;
}

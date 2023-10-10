import { CreateRoleDto } from './dto/create-role.dto';
import { RoleService } from 'role/role.service';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    create(dto: CreateRoleDto): Promise<import("./entities/role.entity").Role>;
    getByValue(value: string): Promise<import("./entities/role.entity").Role>;
}

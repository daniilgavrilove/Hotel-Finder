import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "role/entities/role.entity";

@Injectable()
export class RoleService {

  constructor(@InjectModel(Role)
              private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({where: {value}})
    return role;
  }

}
import {forwardRef, Module} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import {Role} from "role/entities/role.entity";
import {User} from "user/entities/user.entity";
import {SequelizeModule} from "@nestjs/sequelize";
import {UserRoles} from "role/entities/users-roles.entity";
import {UserModule} from "user/user.module";

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles]),
    forwardRef(()=>UserModule)

  ],
  exports: [
    RoleService,

  ]
})
export class RoleModule {}

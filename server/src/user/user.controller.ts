import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'user/entities/user.entity';
import { CreateUserDto } from 'user/dto/create-user.dto';
import { UserService } from 'user/user.service';
import { AddRoleDto } from 'user/dto/add-role.dto';

@ApiTags('Пользователи')
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post('create')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200 })
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  // @ApiOperation({summary: 'Забанить пользователя'})
  // @ApiResponse({status: 200})
  // @Post('/ban')
  // ban(@Body() dto: BanUserDto) {
  //   return this.userService.ban(dto);
  // }
}

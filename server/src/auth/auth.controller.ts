import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'user/entities/user.entity';
import { CreateUserDto } from 'user/dto/create-user.dto';

@ApiTags('Регистрация')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Логин' })
  @ApiResponse({ status: 200, type: User })
  @Post('/login')
  async login(
    @Body() userDto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.authService.login(userDto);
    response.cookie('refreshToken', user.refreshToken, {
      maxAge: 2592000000,
      httpOnly: true,
      secure: false,
    });
    return user;
  }

  @ApiOperation({ summary: 'Регистрация' })
  @ApiResponse({ status: 200, type: User })
  @Post('/registration')
  async registration(
    @Body() userDto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.authService.registration(userDto);
    response.cookie('refreshToken', user.refreshToken, {
      maxAge: 2592000000,
      httpOnly: true,
      secure: false,
    });
    return user;
  }

  @ApiOperation({ summary: 'Логаут' })
  @ApiResponse({ status: 200, type: User })
  @Post('/logout')
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { refreshToken } = request.cookies;
    const token = await this.authService.logout(refreshToken);
    response.clearCookie('refreshToken', {
      maxAge: 2592000000,
      httpOnly: true,
      secure: false,
    });
    return request.cookies['refreshToken'];
  }

  @ApiOperation({ summary: 'Обновление токена' })
  @ApiResponse({ status: 200, type: User })
  @Get('/refresh')
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
    @Body() userDto: CreateUserDto,
  ) {
    const { refreshToken } = request.cookies;
    const user = await this.authService.refresh(refreshToken);
    response.cookie('refreshToken', user.refreshToken, {
      maxAge: 2592000000,
      httpOnly: true,
      secure: false,
    });
    return user;
  }
}

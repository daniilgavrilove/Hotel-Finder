import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'user/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],

  imports: [
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET || 'SECRET',
    }),
    forwardRef(() => UserModule),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}

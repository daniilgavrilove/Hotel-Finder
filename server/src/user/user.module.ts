import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'user/entities/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoleModule } from 'role/role.module';
import { AuthModule } from 'auth/auth.module';
import { Favorite } from 'favorite/entities/favorite.entity';
import { FavoriteModule } from 'favorite/favorite.module';
import { PropertyModule } from 'property/property.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User]),
    forwardRef(() => RoleModule),
    forwardRef(() => FavoriteModule),
    PropertyModule,
  ],
  exports: [UserService],
})
export class UserModule {}

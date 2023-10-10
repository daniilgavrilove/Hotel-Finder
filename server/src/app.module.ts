import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { ListingModule } from './listing/listing.module';
import { ReservationModule } from './reservation/reservation.module';
import { User } from 'user/entities/user.entity';
import { RoleModule } from './role/role.module';
import { Role } from 'role/entities/role.entity';
import { UserRoles } from 'role/entities/users-roles.entity';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from 'files/files.module';
import { Listing } from 'listing/entities/listing.entity';
import { Image } from 'listing/entities/image.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FavoriteModule } from './favorite/favorite.module';
import { Favorite } from 'favorite/entities/favorite.entity';
import { Reservation } from 'reservation/entities/reservation.entity';
import { PropertyModule } from './property/property.module';
import { Property } from 'property/entities/property.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Listing,
        Image,
        Favorite,
        Reservation,
        Property,
      ],

      autoLoadModels: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    UserModule,
    AccountModule,
    ListingModule,
    ReservationModule,
    RoleModule,
    AuthModule,
    FilesModule,
    FavoriteModule,
    PropertyModule,
  ],
})
export class AppModule {}

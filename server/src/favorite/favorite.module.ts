import { forwardRef, Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { FavoriteController } from './favorite.controller';
import { Favorite } from 'favorite/entities/favorite.entity';
import { ListingModule } from 'listing/listing.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'user/entities/user.entity';
import { UserModule } from 'user/user.module';
import { Listing } from 'listing/entities/listing.entity';

@Module({
  controllers: [FavoriteController],
  providers: [FavoriteService],
  imports: [
    SequelizeModule.forFeature([Favorite]),
    forwardRef(() => ListingModule),
    forwardRef(() => UserModule),
  ],
  exports: [FavoriteService],
})
export class FavoriteModule {}

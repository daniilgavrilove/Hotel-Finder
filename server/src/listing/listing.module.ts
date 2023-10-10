import { Module } from '@nestjs/common';
import { ListingService } from './listing.service';
import { ListingController } from './listing.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Image } from 'listing/entities/image.entity';
import { Listing } from 'listing/entities/listing.entity';
import { FilesModule } from 'files/files.module';

@Module({
  controllers: [ListingController],
  providers: [ListingService],
  imports: [SequelizeModule.forFeature([Image, Listing]), FilesModule],
  exports: [ListingService],
})
export class ListingModule {}

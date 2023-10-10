import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Image } from 'listing/entities/image.entity';
import { Listing } from 'listing/entities/listing.entity';
import { FilesModule } from 'files/files.module';
import { Reservation } from 'reservation/entities/reservation.entity';

@Module({
  controllers: [ReservationController],
  providers: [ReservationService],
  imports: [SequelizeModule.forFeature([Reservation])],
})
export class ReservationModule {}

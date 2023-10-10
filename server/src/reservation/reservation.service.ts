import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from 'reservation/entities/reservation.entity';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'user/entities/user.entity';
import { Image } from 'listing/entities/image.entity';
import { Listing } from 'listing/entities/listing.entity';
import { Property } from 'property/entities/property.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservation) private reservationRepository: typeof Reservation,
  ) {}
  async create(createReservationDto: CreateReservationDto) {
    const reservation = await this.reservationRepository.create(
      createReservationDto,
    );
    return reservation;
  }

  async findAll(query: {
    userId: number;
    listingId: number;
    authorId: number;
  }) {
    const { userId, listingId, authorId } = query;
    console.log(query);
    let reservations;
    if (userId) {
      reservations = await this.reservationRepository.findAll({
        where: { userId: userId },
        include: [{ model: Listing, include: [{ model: Image }] }],
      });
      return reservations;
    }
    if (listingId) {
      reservations = await this.reservationRepository.findAll({
        where: { listingId },
        include: [{ model: Listing, include: [{ model: Image }] }],
      });
      return reservations;
    }
    if (authorId) {
      reservations = await this.reservationRepository.findAll({
        include: {
          model: Listing,
          required: true,

          include: [
            { model: Image },
            { model: Property, where: { userId: authorId } },
          ],
        },
      });
      return reservations;
    } else {
      reservations = await this.reservationRepository.findAll({
        include: { all: true, include: [{ all: true }] },
      });
      return reservations;
    }
  }

  async findOne(id: number) {
    return await this.reservationRepository.findOne({ where: { id } });
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    return await this.reservationRepository.update(
      { ...updateReservationDto },
      { where: { id } },
    );
  }

  async remove(id: number) {
    return await this.reservationRepository.destroy({ where: { id } });
  }
}

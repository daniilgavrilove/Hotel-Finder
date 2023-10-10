import { BelongsToMany } from 'sequelize-typescript';
import { Listing } from 'listing/entities/listing.entity';

export class CreateReservationDto {
  readonly id: number;
  readonly startDate: string;
  readonly endDate: string;
  readonly adultsCount: number;
  readonly childrenCount: number;
  readonly infantsCount: number;
  readonly totalPrice: number;
  readonly userId: number;
  readonly listingId: number;
}

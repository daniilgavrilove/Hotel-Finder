import {
  Model,
  DataType,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'user/entities/user.entity';
import { Listing } from 'listing/entities/listing.entity';

interface ReservationCreationAttrs {
  id: number;
  startDate: string;
  endDate: string;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  totalPrice: number;
}

@Table({ tableName: 'reservation' })
export class Reservation extends Model<Reservation> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: '11.02.23', description: 'Start date' })
  @Column({ type: DataType.STRING, allowNull: true })
  startDate: string;

  @ApiProperty({ example: '2 000', description: 'End date' })
  @Column({ type: DataType.STRING, allowNull: true })
  endDate: string;

  @ApiProperty({ example: '2 000', description: 'Bathroom count' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  adultsCount: number;

  @ApiProperty({ example: '2 000', description: 'Guest count' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  childrenCount: number;

  @ApiProperty({ example: '2 000', description: 'Guest count' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  infantsCount: number;

  @ApiProperty({ example: '2 000', description: 'Цена товара' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  totalPrice: number;

  @BelongsTo(() => User)
  user: User;

  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => Listing)
  listing: Listing;

  @ApiProperty({ example: '1', description: 'Идентификатор категории' })
  @ForeignKey(() => Listing)
  @Column({ type: DataType.INTEGER })
  listingId: number;
}

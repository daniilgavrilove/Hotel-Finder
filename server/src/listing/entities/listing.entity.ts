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
import { Image } from 'listing/entities/image.entity';
import { User } from 'user/entities/user.entity';
import { Favorite } from 'favorite/entities/favorite.entity';
import { Reservation } from 'reservation/entities/reservation.entity';
import { Property } from 'property/entities/property.entity';

interface ListingCreationAttrs {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  price: number;
  images: Image[];
  propertyId: number;
}

@Table({ tableName: 'listing' })
export class Listing extends Model<Listing, ListingCreationAttrs> {
  @ApiProperty({ example: '1', description: 'ID' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: 'Hotel', description: 'Listings title' })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string;

  @ApiProperty({ example: 'Hotel', description: 'Listings description' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: 'Hotel', description: 'Listings category' })
  @Column({ type: DataType.STRING, allowNull: true })
  category: string;

  @ApiProperty({ example: '2 000', description: 'Room count' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  roomCount: number;

  @ApiProperty({ example: '2 000', description: 'Bathroom count' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  bathroomCount: number;

  @ApiProperty({ example: '2 000', description: 'Guest count' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  guestCount: number;

  @ApiProperty({ example: 'Hotel', description: 'Location category' })
  @Column({ type: DataType.STRING, allowNull: true })
  locationValue: string;

  @ApiProperty({
    example: 'hudi',
    description:
      'Слаг. Используется для пути товара и названия папки с картинками',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  slug: string;

  @ApiProperty({ example: '2 000', description: 'Цена товара' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  price: number;

  @HasMany(() => Image, { onDelete: 'CASCADE' })
  images: Image[];

  @BelongsTo(() => Favorite)
  favorite: Favorite;

  @ApiProperty({ example: '1', description: 'Идентификатор избранного' })
  @ForeignKey(() => Favorite)
  @Column({ type: DataType.INTEGER })
  favoriteId: number;

  @BelongsTo(() => Property)
  property: Property;

  @ApiProperty({ example: '1', description: 'Идентификатор избранного' })
  @ForeignKey(() => Property)
  @Column({ type: DataType.INTEGER })
  propertyId: number;

  @HasMany(() => Reservation)
  reservations: Reservation[];
}

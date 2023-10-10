import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Listing } from 'listing/entities/listing.entity';

interface ImageCreationAttributes {
  id: number;
  imageSrc: string;
  listingId: number;
}

@Table({ tableName: 'image', updatedAt: false, createdAt: false })
export class Image extends Model<Image, ImageCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: 'Худи', description: 'Путь к картинке' })
  @Column({ type: DataType.STRING, allowNull: true })
  imageSrc: string;

  @BelongsTo(() => Listing, { onDelete: 'CASCADE' })
  listing: Listing;

  @ApiProperty({ example: '1', description: 'Идентификатор категории' })
  @ForeignKey(() => Listing)
  @Column({ type: DataType.INTEGER })
  listingId: number;
}

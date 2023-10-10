import {
  Model,
  DataType,
  Table,
  Column,
  BelongsToMany,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'user/entities/user.entity';
import { Listing } from 'listing/entities/listing.entity';

interface PropertyCreationAttrs {
  id: number;
  userId: number;
}

@Table({ tableName: 'property' })
export class Property extends Model<Property, PropertyCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: '1', description: 'Идентификатор Пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @HasMany(() => Listing)
  listings: Listing[];
}

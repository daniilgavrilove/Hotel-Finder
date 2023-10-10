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

interface FavoriteCreationAttrs {
  id: number;
  userId: number;
}

@Table({ tableName: 'favorite' })
export class Favorite extends Model<Favorite, FavoriteCreationAttrs> {
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

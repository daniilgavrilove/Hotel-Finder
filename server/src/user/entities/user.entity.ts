import {
  DataType,
  Table,
  Column,
  Model,
  BelongsToMany,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { UserRoles } from 'role/entities/users-roles.entity';
import { Role } from 'role/entities/role.entity';
import { Listing } from 'listing/entities/listing.entity';
import { Favorite } from 'favorite/entities/favorite.entity';
import { Reservation } from 'reservation/entities/reservation.entity';
import { Property } from 'property/entities/property.entity';

interface UserCreationAttrs {
  id: number;
  name: string;
  email: string;
  password: string;
  emailVerified: boolean;
  image: string;
  activationLink: string;
  refreshToken: string;
  accessToken: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  emailVerified: boolean;

  @Column({ type: DataType.STRING })
  image: string;

  @Column({ type: DataType.STRING })
  activationLink: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  refreshToken: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  accessToken: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasOne(() => Favorite)
  favorite: Favorite;

  @HasOne(() => Property)
  property: Property;

  @HasMany(() => Reservation)
  reservations: Reservation[];
}

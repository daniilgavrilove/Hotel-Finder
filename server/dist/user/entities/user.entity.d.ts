import { Model } from 'sequelize-typescript';
import { Role } from 'role/entities/role.entity';
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
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    name: string;
    email: string;
    password: string;
    emailVerified: boolean;
    image: string;
    activationLink: string;
    refreshToken: string;
    accessToken: string;
    roles: Role[];
    favorite: Favorite;
    property: Property;
    reservations: Reservation[];
}
export {};

import { Model } from 'sequelize-typescript';
import { Image } from 'listing/entities/image.entity';
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
export declare class Listing extends Model<Listing, ListingCreationAttrs> {
    id: number;
    title: string;
    description: string;
    category: string;
    roomCount: number;
    bathroomCount: number;
    guestCount: number;
    locationValue: string;
    slug: string;
    price: number;
    images: Image[];
    favorite: Favorite;
    favoriteId: number;
    property: Property;
    propertyId: number;
    reservations: Reservation[];
}
export {};

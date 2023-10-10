import { Model } from 'sequelize-typescript';
import { Listing } from 'listing/entities/listing.entity';
interface FavoriteCreationAttrs {
    id: number;
    userId: number;
}
export declare class Favorite extends Model<Favorite, FavoriteCreationAttrs> {
    id: number;
    userId: number;
    listings: Listing[];
}
export {};

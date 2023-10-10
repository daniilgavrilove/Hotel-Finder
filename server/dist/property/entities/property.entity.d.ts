import { Model } from 'sequelize-typescript';
import { Listing } from 'listing/entities/listing.entity';
interface PropertyCreationAttrs {
    id: number;
    userId: number;
}
export declare class Property extends Model<Property, PropertyCreationAttrs> {
    id: number;
    userId: number;
    listings: Listing[];
}
export {};

import { Model } from 'sequelize-typescript';
import { Listing } from 'listing/entities/listing.entity';
interface ImageCreationAttributes {
    id: number;
    imageSrc: string;
    listingId: number;
}
export declare class Image extends Model<Image, ImageCreationAttributes> {
    id: number;
    imageSrc: string;
    listing: Listing;
    listingId: number;
}
export {};

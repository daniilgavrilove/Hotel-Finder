import { Model } from 'sequelize-typescript';
import { User } from 'user/entities/user.entity';
import { Listing } from 'listing/entities/listing.entity';
export declare class Reservation extends Model<Reservation> {
    id: number;
    startDate: string;
    endDate: string;
    adultsCount: number;
    childrenCount: number;
    infantsCount: number;
    totalPrice: number;
    user: User;
    userId: number;
    listing: Listing;
    listingId: number;
}

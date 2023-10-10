import { Model } from 'sequelize-typescript';
export declare class ReservationsListings extends Model<ReservationsListings> {
    id: number;
    reservationId: number;
    listingId: number;
}

import {IListing} from "@/features/ListingCreation/model/types/IListing";
import {IUser} from "@/features/Auth";

export interface IReservation {
    id: number;
    startDate: string;
    endDate: string;
    adultsCount: number;
    childrenCount: number;
    infantsCount: number;
    totalPrice: number;
    listing:IListing
    user:IUser
    userId:number
    listingId:number
}

export interface IReservationQuery{
    userId: number | undefined
    listingId: number | undefined
    authorId: number|undefined
}
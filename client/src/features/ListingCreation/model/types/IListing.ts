import {IUser} from "@/features/Auth";
import {IReservation} from "@/features/Favorite/model/types/IReservation";

export interface Image {
    id:        number;
    imageSrc:  string;
    listingId: number;
}

export interface IListing {
    id:            number;
    title:         string;
    description:   string;
    category:      string;
    roomCount:     number;
    bathroomCount: number;
    guestCount:    number;
    locationValue: string;
    slug:          string;
    price:         number;
    propertyId:        number;
    createdAt:     Date;
    updatedAt:     Date;
    images:        Image[];
    user:          IUser;
    reservations: IReservation[]
}




export interface IListingArray {
    count: number;
    rows:  IListing[];
}
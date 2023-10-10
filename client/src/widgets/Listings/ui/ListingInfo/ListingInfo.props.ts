import {IUser} from "@/features/Auth";

export interface ListingInfoProps{
    description: string
    roomCount:     number;
    bathroomCount: number;
    guestCount:    number;
    owner:IUser
    locationValue:string
    category:string
}
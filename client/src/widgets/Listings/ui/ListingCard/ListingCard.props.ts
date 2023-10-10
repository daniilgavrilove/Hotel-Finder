import {IListing} from "@/features/ListingCreation/model/types/IListing";
import {IUser} from "@/features/Auth";

export interface ListingCardProps {
    data: IListing;
    reservation?: any;
    onAction?: (id: number ) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: number;
    // currentUser?: IUser | null
}
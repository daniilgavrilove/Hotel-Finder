import {Image} from "@/features/ListingCreation/model/types/IListing";

export interface ListingHeaderProps {
    className?: string
    title: string
    slug:string
    images:Image[]


}
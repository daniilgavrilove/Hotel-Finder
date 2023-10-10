import {Image} from "@/features/ListingCreation/model/types/IListing";

export interface PhotoGalleryProps {
    isOpen: boolean;
    setIsOpen: (isOpen:boolean) => void;
    images:Image[]
    slug: string
}
/// <reference types="multer" />
import { ListingService } from './listing.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from 'listing/entities/listing.entity';
export declare class ListingController {
    private readonly listingService;
    constructor(listingService: ListingService);
    create(createListingDto: CreateListingDto, images: Array<Express.Multer.File>): Promise<Listing>;
    findAll(query: {
        category: string;
        limit: number;
        page: number;
        propertyId: number;
    }): Promise<any>;
    findOne(slug: string): Promise<Listing>;
    update(slug: string, updateListingDto: UpdateListingDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}

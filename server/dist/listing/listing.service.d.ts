/// <reference types="multer" />
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from 'listing/entities/listing.entity';
import { FilesService } from 'files/files.service';
export declare class ListingService {
    private listingRepository;
    private fileService;
    constructor(listingRepository: typeof Listing, fileService: FilesService);
    create(createListingDto: CreateListingDto, images: Array<Express.Multer.File>): Promise<Listing>;
    findAll(query: any): Promise<any>;
    findOne(slug: string): Promise<Listing>;
    update(slug: string, updateListingDto: UpdateListingDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}

import { AddListingToFavorite, DeleteListingFromFavorite } from './dto/create-favorite.dto';
import { Favorite } from 'favorite/entities/favorite.entity';
import { ListingService } from 'listing/listing.service';
export declare class FavoriteService {
    private favoriteRepository;
    private listingService;
    constructor(favoriteRepository: typeof Favorite, listingService: ListingService);
    createOneFavorite(userId: number): Promise<Favorite>;
    getUserFavorite(id: any): Promise<Favorite>;
    addListingToFavorite(body: AddListingToFavorite): Promise<Favorite>;
    deleteListingFromFavorite(body: DeleteListingFromFavorite): Promise<Favorite>;
}

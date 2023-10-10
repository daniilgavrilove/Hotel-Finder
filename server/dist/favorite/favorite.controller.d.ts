import { FavoriteService } from './favorite.service';
import { AddListingToFavorite, DeleteListingFromFavorite } from './dto/create-favorite.dto';
import { Favorite } from 'favorite/entities/favorite.entity';
export declare class FavoriteController {
    private readonly favoriteService;
    constructor(favoriteService: FavoriteService);
    addListingToFavorite(body: AddListingToFavorite): Promise<Favorite>;
    getUserFavorite(favoriteId: number): Promise<Favorite>;
    deleteListingFromFavorite(body: DeleteListingFromFavorite): Promise<Favorite>;
}

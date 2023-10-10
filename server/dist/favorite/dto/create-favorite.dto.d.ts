export declare class CreateFavoriteDto {
}
export declare class AddListingToFavorite {
    readonly listingSlug: string;
    readonly favoriteId: number;
}
declare const DeleteListingFromFavorite_base: import("@nestjs/common").Type<Partial<AddListingToFavorite>>;
export declare class DeleteListingFromFavorite extends DeleteListingFromFavorite_base {
}
export {};

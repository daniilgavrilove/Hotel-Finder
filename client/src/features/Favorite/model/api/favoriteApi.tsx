import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {baseQueryWithReauth} from "@/features/Auth/model/api/Auth.interceptor";
import {IListing} from "@/features/ListingCreation/model/types/IListing";

export interface IFavorite {
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    listings: IListing[];
}

interface IFavoriteDto {
    listingSlug: string;
    favoriteId: number;
}

export const favoriteAPI = createApi({
    reducerPath: 'favoriteAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Favorite'],
    endpoints: (build) => ({
        addListingToFavorite: build.mutation<IFavorite, IFavoriteDto>({
            query: (body) => ({
                url: `/favorite`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Favorite']
        }),
        deleteListingFromFavorite: build.mutation<IFavorite, IFavoriteDto>({
            query: (body) => ({
                url: `/favorite`,
                method: 'DELETE',
                body,

            }),
            invalidatesTags: ['Favorite'],
        }),
        getUserFavorite: build.query<IFavorite, number | undefined>({
            query: (favoriteId = 0) => ({
                url: `/favorite/${favoriteId}`,

            }),
            providesTags: result => ['Favorite']
        }),

    })
})
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {FieldValues} from "react-hook-form";
import {baseQueryWithReauth} from "@/features/Auth/model/api/Auth.interceptor";
import {IListing, IListingArray} from "@/features/ListingCreation/model/types/IListing";

interface IListingQuery{
    page: number | undefined
    limit: number | undefined
    category: string | undefined
    propertyId: number | undefined
}



export const listingAPI = createApi({
    reducerPath: 'listingAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Listing'],
    endpoints: (build) => ({
        getAllListings: build.query<IListingArray, IListingQuery>({
            query: ({page, limit, category,propertyId}) => ({
                url: `/listing/`,
                params: {
                    page,
                    limit,
                    category,
                    propertyId
                }
            }),
            providesTags: result => ['Listing']
        }),
        getOneListing: build.query<IListing, string | undefined>({
            query: (slug) => ({
                url: `/listing/${slug}`,

            }),
            providesTags: result => ['Listing']
        }),
        createOneListing: build.mutation<IListing, FieldValues>({
            query: (product) => ({
                url: `/listing`,
                method: 'POST',
                body: product,

            }),

            invalidatesTags: ['Listing']
        }),
        deleteOneListing: build.mutation<IListing, number>({
            query: (id) => ({
                url: `/listing/${id}`,
                method: 'DELETE',

            }),

            invalidatesTags: ['Listing']
        }),


    })
})
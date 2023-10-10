import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {FieldValues} from "react-hook-form";
import {baseQueryWithReauth} from "@/features/Auth/model/api/Auth.interceptor";
import {IReservation, IReservationQuery} from "@/features/Favorite/model/types/IReservation";

export const reservationAPI = createApi({
    reducerPath: 'reservationAPI',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Reservation'],
    endpoints: (build) => ({
        getAllReservations: build.query<IReservation[], IReservationQuery>({
            query: ({userId,listingId, authorId}) => ({
                url: `/reservation/`,
                params: {
                   listingId,
                    userId,
                    authorId
                }
            }),
            providesTags: result => ['Reservation']
        }),
        getOneReservation: build.query<IReservation, number | undefined>({
            query: (id) => ({
                url: `/reservation/${id}`,

            }),
            providesTags: result => ['Reservation']
        }),
        createOneReservation: build.mutation<IReservation, FieldValues>({
            query: (product) => ({
                url: `/reservation`,
                method: 'POST',
                body: product,

            }),

            invalidatesTags: ['Reservation']
        }),
        deleteOneReservation: build.mutation<IReservation, number>({
            query: (id) => ({
                url: `/reservation/${id}`,
                method: 'DELETE',

            }),

            invalidatesTags: ['Reservation']
        }),


    })
})
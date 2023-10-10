import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {FieldValues} from "react-hook-form";
import {baseQueryWithReauth} from "./Auth.interceptor";
import {IUser} from "../types/IUser";




export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery:baseQueryWithReauth,
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    registration: build.mutation<IUser, FieldValues>({
      query: (auth) => ({
        url: `/auth/registration`,
        method: 'POST',
        body: auth,

      }),

      invalidatesTags: ['Auth']
    }),
    login: build.mutation<IUser, FieldValues>({
      query: (auth) => ({
        url: `/auth/login`,
        method: 'POST',
        body: auth,
      }),

      invalidatesTags: ['Auth']
    }),
    logout: build.mutation<any, any>({
      query: (auth) => ({
        url: `/auth/logout`,
        method: 'POST',
        body:auth

      }),
    }),
    refresh: build.query<any, any>({
      query: () => {
        return{
          url: `/auth/refresh`,
        }
      },


    }),
  })
})
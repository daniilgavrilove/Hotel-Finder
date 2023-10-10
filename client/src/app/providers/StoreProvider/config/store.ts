import { configureStore } from '@reduxjs/toolkit';
import {authSlice, registerModalSlice, authAPI, loginModalSlice} from '@/features/Auth';
import {rtkQueryErrorLogger} from "@/shared/api/middlewares/rtkQueryErrorLogger";
import {listingAPI, rentModalSlice} from "@/features/ListingCreation";
import {favoriteAPI} from "@/features/Favorite/model/api/favoriteApi";
import {reservationAPI} from "@/features/Reservation/model/api/reservationApi";

export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    registerModal: registerModalSlice.reducer,
      loginModal: loginModalSlice.reducer,
      rentModal: rentModalSlice.reducer,
      [authAPI.reducerPath]:authAPI.reducer,
      [listingAPI.reducerPath]:listingAPI.reducer,
      [favoriteAPI.reducerPath]:favoriteAPI.reducer,
      [reservationAPI.reducerPath]:reservationAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
          .concat([
              authAPI.middleware,
              listingAPI.middleware,
              favoriteAPI.middleware,
              reservationAPI.middleware,
              // rtkQueryErrorLogger
          ])
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

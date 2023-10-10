import { RouteObject } from 'react-router-dom';
import {MainPage} from '@/pages/MainPage';
import {AboutPage} from '@/pages/AboutPage';
import FavoritePage from "@/pages/FavoritePage/ui/FavoritePage";
import ListingPage from "@/pages/ListingPage/ui/ListingPage";
import TripPage from "@/pages/TripPage/ui/TripPage";
import ReservationPage from "@/pages/ReservationPage/ui/ReservationPage";
import PropertyPage from "@/pages/PropertyPage/ui/PropertyPage";

export enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    FAVORITES = '/favorites',
    LISTING = '/listing/:slug',
    TRIPS = '/trips',
    RESERVATIONS = '/reservations',
    PROPERTIES = '/properties',
}

export const routesConfig: RouteObject[] = [
    { path: AppRoutes.MAIN, element: <MainPage />,  },
    { path: AppRoutes.ABOUT, element: <AboutPage /> },
    { path: AppRoutes.FAVORITES, element: <FavoritePage /> },
    { path: AppRoutes.LISTING, element: <ListingPage /> },
    { path: AppRoutes.TRIPS, element: <TripPage /> },
    { path: AppRoutes.RESERVATIONS, element: <ReservationPage /> },
    { path: AppRoutes.PROPERTIES, element: <PropertyPage /> },


];

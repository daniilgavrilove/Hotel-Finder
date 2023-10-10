 import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import {PageLoader} from "@/shared/ui/PageLoader/PageLoader";
 // eslint-disable-next-line ulbi-tv-plugin/layer-imports
 import {routesConfig} from "@/app/config/routeConfig/routeConfig";

export const AppRouter = () => {
    routesConfig.map(({ path, element }) => (
        { path, element }
    ));

    const router = createBrowserRouter(
        routesConfig.map(({ path, element, errorElement }) => (
            {
                path,
                element,
                errorElement,
            }

        )),
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

import {FC} from "react";
import {FavoritePageProps} from './FavoritePage.props'
import {RootLayout} from "@/pages/Layouts/RootLayout/RootLayout";
import {Favorites} from "@/widgets/Favorites";

const FavoritePage: FC<FavoritePageProps> = () => {


    return (
        <RootLayout >
            <Favorites/>
        </RootLayout>
    );
};

export default FavoritePage
import {FC} from "react";
import cn from 'classnames'
import {PropertyPageProps} from './PropertyPage.props'
import styles from './PropertyPage.module.scss'
import {RootLayout} from "@/pages/Layouts/RootLayout/RootLayout";
import {Properties} from "@/widgets/Properties";

const PropertyPage: FC<PropertyPageProps> = (props) => {

    const {className} = props

    return (
       <RootLayout>
           <Properties/>
       </RootLayout>
    );
};

export default PropertyPage
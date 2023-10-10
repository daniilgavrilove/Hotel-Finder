import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import {CategoriesProps} from './Categories.props'
import styles from './Categories.module.scss'
import {Container} from "@/shared/ui/Container/Container";
import {CategoryBox} from "@/entities/CategoryBox";
import BeachSVG from '@/shared/lib/svg/beach.svg'
import WindmillsSVG from '@/shared/lib/svg/windmill.svg'
import ModernSVG from '@/shared/lib/svg/modern.svg'
import PoolsSVG from '@/shared/lib/svg/pool.svg'
import IslandsSVG from '@/shared/lib/svg/island.svg'
import LakeSVG from '@/shared/lib/svg/lake.svg'
import CountrysideSVG from '@/shared/lib/svg/landscape.svg'
import SkiingSVG from '@/shared/lib/svg/skiing.svg'
import CastlesSVG from '@/shared/lib/svg/castle.svg'
import CavesSVG from '@/shared/lib/svg/cave.svg'
import ArcticSVG from '@/shared/lib/svg/arctic.svg'
import CampingSVG from '@/shared/lib/svg/camping.svg'
import DesertSVG from '@/shared/lib/svg/desert.svg'
import BarnsSVG from '@/shared/lib/svg/barn.svg'
import LuxSVG from '@/shared/lib/svg/diamond.svg'



export const categories = [
    {
        label: 'Beach',
        icon: BeachSVG,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: WindmillsSVG,
        description: 'This property is has windmills!',
    },
    {
        label: 'Modern',
        icon: ModernSVG,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: CountrysideSVG,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: PoolsSVG,
        description: 'This is property has a beautiful pool!'
    },
    {
        label: 'Islands',
        icon: IslandsSVG,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: LakeSVG,
        description: 'This property is near a lake!'
    },
    {
        label: 'Skiing',
        icon: SkiingSVG,
        description: 'This property has skiing activies!'
    },
    {
        label: 'Castles',
        icon: CastlesSVG,
        description: 'This property is an ancient castle!'
    },
    {
        label: 'Caves',
        icon: CavesSVG,
        description: 'This property is in a spooky cave!'
    },
    {
        label: 'Camping',
        icon: CampingSVG,
        description: 'This property offers camping activities!'
    },
    {
        label: 'Arctic',
        icon: ArcticSVG,
        description: 'This property is in arctic environment!'
    },
    {
        label: 'Desert',
        icon: DesertSVG,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        icon: BarnsSVG,
        description: 'This property is in a barn!'
    },
    {
        label: 'Lux',
        icon: LuxSVG,
        description: 'This property is brand new and luxurious!'
    }
]

export const Categories: FC<CategoriesProps> = (props) => {

    const {className} = props

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Container className={styles.Categories} >
            {categories.map((item,)=>(
            <CategoryBox
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={searchParams.get('category')===item.label}
            />
            ))}
        </Container>
    );
};
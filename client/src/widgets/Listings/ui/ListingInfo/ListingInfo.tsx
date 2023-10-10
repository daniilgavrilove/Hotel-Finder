import {FC} from "react";
import cn from 'classnames'
import {ListingInfoProps} from './ListingInfo.props'
import styles from './ListingInfo.module.scss'
import {Container} from "@/shared/ui/Container/Container";
import {Avatar} from "@/shared/ui/Avatar/Avatar";
import {IconWithText} from "@/entities/IconWithText";
import {categories} from "@/widgets/Navbar/ui/Categories/Categories";

export const ListingInfo: FC<ListingInfoProps> = (props) => {
    const {guestCount,bathroomCount,roomCount,owner,locationValue,category,description} = props

    const categoryItem = categories.find(item=>item.label===category)

    const newDate = new Date()
    const currentYear = newDate.getFullYear();
    const yearsOfRegistration = String(owner.createdAt)?.slice(0, 4)
    const yearsWithService = Number(currentYear) - Number(yearsOfRegistration)

    return (
        <div className={cn(styles.ListingInfo)}>
            <Container>
                <div className={styles.location} >{locationValue}</div>
                <div className={styles.counts}  >
                    <span>{`${guestCount} guests`}</span>
                    <span>{`${roomCount} rooms`}</span>
                    <span>{`${bathroomCount} bathrooms`}</span>
                </div>
                <hr/>
                <div className={styles.owner}>
                    <IconWithText
                        avatar={ <Avatar size={40}/>}
                            mainText={`Owner: ${owner.name}`}
                            secondaryText={`${yearsWithService} years hosting`}/>

                </div>
                <hr/>
                <div className={styles.details}>
                    {categoryItem && (
                        <IconWithText
                        icon={categoryItem.icon}
                        mainText={categoryItem.label}
                        secondaryText={categoryItem.description}/>)}
                </div>
                <hr/>
                <div className={styles.description}>{description}</div>

            </Container>

        </div>
    );
};
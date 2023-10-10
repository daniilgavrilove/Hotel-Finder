import {FC} from "react";
import cn from 'classnames'
import {IconWithTextProps} from './IconWithText.props'
import styles from './IconWithText.module.scss'
import {Avatar} from "@/shared/ui/Avatar/Avatar";

export const IconWithText: FC<IconWithTextProps> = (props) => {

    const {
        size = 30,
        avatar,
        icon:Icon,
        secondaryText,
        mainText,
        className} = props

    return (
        <div className={cn(styles.IconWithText, className)}>
            <div className={styles.icon}>
                {avatar && avatar}
                {Icon && <Icon width={size} height={size}/>}
            </div>
                <div className={styles.text} >
                    <div className={styles.mainText}>{mainText}</div>
                    <div className={styles.secondaryText} >{secondaryText}</div>
                </div>
        </div>
    );
};
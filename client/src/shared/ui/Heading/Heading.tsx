import {FC} from "react";
import cn from 'classnames'
import {HeadingProps} from './Heading.props'
import styles from './Heading.module.scss'

export const Heading: FC<HeadingProps> = (props) => {

    const {className,title,center,subtitle} = props

    return (
        <div className={cn(styles.Heading, className,{
            [styles.textCenter]:center
        })}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    );
};
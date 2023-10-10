import {FC} from "react";
import cn from 'classnames'
import {ArrowButtonProps} from './ArrowButton.props'
import styles from './ArrowButton.module.scss'
import ArrowSVG from '@/shared/lib/svg/arrow.svg'


export const ArrowButton: FC<ArrowButtonProps> = (props) => {

    const {className,onClick,direction} = props

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(styles.ArrowButton, className,{
                [styles.toLeft]:direction === 'toLeft'
            })}>
            <ArrowSVG/>
        </button>
    );
};
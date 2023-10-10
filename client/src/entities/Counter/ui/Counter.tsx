import {FC, useCallback} from "react";
import cn from 'classnames'
import {CounterProps} from './Counter.props'
import styles from './Counter.module.scss'
import PlusSVG from '@/shared/lib/svg/plus.svg'
import MinusSVG from '@/shared/lib/svg/minus.svg'


export const Counter: FC<CounterProps> = (props) => {

    const {title,value,subtitle,onChange} = props


    const onAdd = useCallback(
        () => {
           onChange(value + 1)
        },
        [value, onChange],
    );


    const onReduce = useCallback(
        () => {
            if (value === 1) return
            onChange(value - 1)
        },
        [value, onChange],
    );


    return (
        <div className={cn(styles.Counter)} >
            <div className={styles.text} >
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <div className={styles.counterActions} >
                <div onClick={onReduce} className={styles.counterAction} ><MinusSVG/></div>
                <div className={styles.counterValue}>{value}</div>
                <div onClick={onAdd} className={styles.counterAction} ><PlusSVG/></div>

            </div>
        </div>
    );
};
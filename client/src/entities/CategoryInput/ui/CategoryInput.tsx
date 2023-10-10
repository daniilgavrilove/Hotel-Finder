import {FC} from "react";
import cn from 'classnames'
import {CategoryInputProps} from './CategoryInput.props'
import styles from './CategoryInput.module.scss'

export const CategoryInput: FC<CategoryInputProps> = (props) => {

    const {icon:Icon,onClick,label,selected} = props

    return (
        <div
            onClick={() => onClick(label)}
            className={cn(styles.CategoryInput,{
            [styles.selected]:selected
        })}>
            <Icon width={30} height={30} />
            <div className={styles.label}>
                {label}
            </div>
        </div>
    );
};
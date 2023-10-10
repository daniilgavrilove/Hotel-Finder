import {FC, useCallback} from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";
import {CategoryBoxProps} from './CategoryBox.props'
import styles from './CategoryBox.module.scss'

export const CategoryBox: FC<CategoryBoxProps> = (props) => {

    const {label,
    icon:Icon,
    selected} = props

    const [searchParams, setSearchParams] = useSearchParams();

    const onClickHandler = useCallback(
        () => {
            if (searchParams.get('category') === label) {
                searchParams.delete('category')
                setSearchParams(searchParams)
            } else {
                setSearchParams({category: label})
            }
        },
        [label, searchParams, setSearchParams],
    );


    return (
        <div
            onClick={onClickHandler}
            className={cn(styles.CategoryBox,{
                [styles.selected]:selected
            })}>
            {Icon && (
                <Icon
                    fill="black"
                    width={26}
                    height={26}
                />
            )}
            <div className={styles.label}>{label}</div>
        </div>
    );
};
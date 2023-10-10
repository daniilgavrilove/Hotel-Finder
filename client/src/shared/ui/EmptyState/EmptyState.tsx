import {FC} from "react";
import cn from 'classnames'
import {useNavigate} from "react-router-dom";
import {EmptyStateProps} from './EmptyState.props'
import styles from './EmptyState.module.scss'
import {Heading} from "@/shared/ui/Heading/Heading";
import {Button} from "@/shared/ui/Button/Button";

export const EmptyState: FC<EmptyStateProps> = (props) => {

    const {
        title = "No exact matches",
        subtitle = "Try changing or removing some of your filters.",
        showReset
    } = props

    const navigate = useNavigate()

    return (
        <div className={(styles.EmptyState)}>
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            {showReset && (
                <div className={styles.button}>
                    <Button
                        outline
                        label="Remove all filters"
                        onClick={()=>navigate('/')}
                    />
                </div>
            )}
        </div>
    );
};
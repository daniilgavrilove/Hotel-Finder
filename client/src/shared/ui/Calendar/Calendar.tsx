import {FC} from "react";
import cn from 'classnames'
import {DateRange} from "react-date-range";
import {CalendarProps} from './Calendar.props'
import styles from './Calendar.module.scss'

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export const Calendar: FC<CalendarProps> = (props) => {

    const {value,onChange,disabledDates} = props

    return (
        <DateRange
            rangeColors={['#262626']}
            ranges={[value]}
            date={new Date()}
            onChange={onChange}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={disabledDates}
        />
    );
};
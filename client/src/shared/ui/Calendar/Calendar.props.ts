import {
    Range,
    RangeKeyDict
} from 'react-date-range';

export interface CalendarProps {
    value: Range,
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
}
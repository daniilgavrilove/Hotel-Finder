import {FC} from "react";
import cn from 'classnames'
import Select from "react-select";
import {CountrySelectProps, CountrySelectValue} from './CountrySelect.props'
import styles from './CountrySelect.module.scss'
import useCountries from "@/shared/lib/hooks/useCountries";
import {flagemojiToPNG} from "@/shared/lib/functions/flagemojiToPNG";

export const CountrySelect: FC<CountrySelectProps> = (props) => {

    const {value,onChange} = props

    const {getAll} = useCountries()

    const a = getAll()




    return (
        <div className={cn(styles.CountrySelect)}>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={value=>onChange(value as CountrySelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className={styles.formatOptionLabel}>
                        {flagemojiToPNG(option.flag)}
                        <div>
                            {option.label},
                            <span className={styles.region}>
                {option.region}
              </span>
                        </div>
                    </div>
                )}
                classNames={{
                    control: () => styles.control,
                    input: () => styles.input,
                    option: () => styles.option
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6'
                    }
                })}
            />
        </div>
    );
};
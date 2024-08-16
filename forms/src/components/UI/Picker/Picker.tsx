import { forwardRef, useId } from 'react';

import classes from './Picker.module.scss';

import { useAutocomplete } from '@/hooks/useAutocomplete';

type Props = {
  label: string;
  dataList: string[];
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Picker = forwardRef(
  ({ label, dataList, required = false, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
    const id = useId();
    const { value, listVisible, filteredList, selectedCountry, handleChange, handleFocus, handleListClick } =
      useAutocomplete(dataList, id);

    return (
      <label className={classes.label}>
        {(required ? '* ' : '') + label}:
        <input
          id={`picker-input-${id}`}
          className={classes.input}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="one-time-code"
          ref={ref || undefined}
          {...attr}
        />
        {listVisible && filteredList.length > 0 && !selectedCountry && (
          <ul className={classes.list} id={`picker-list-${id}`}>
            {filteredList.map(country => (
              <li key={country} onClick={() => handleListClick(country)}>
                {country}
              </li>
            ))}
          </ul>
        )}
      </label>
    );
  },
);

export { Picker };

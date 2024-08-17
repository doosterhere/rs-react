import { forwardRef, useId } from 'react';

import classes from './Picker.module.scss';

import { useAutocomplete } from '@/hooks/useAutocomplete';

type Props = {
  label: string;
  dataList: string[];
  message?: string;
  value: string;
  onChanging: (value: string) => void;
};

const Picker = forwardRef(
  ({ label, dataList, message, value, onChanging, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
    const id = useId();
    const { listVisible, filteredList, selectedCountry, handleChange, handleFocus, handleListClick } = useAutocomplete(
      dataList,
      id,
      value,
      onChanging,
    );

    return (
      <label className={classes.label}>
        {label}:
        <input
          type="text"
          id={`picker-input-${id}`}
          className={classes.input}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="one-time-code"
          ref={ref}
          {...attr}
        />
        {message && <span className={classes.error}>{message}</span>}
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

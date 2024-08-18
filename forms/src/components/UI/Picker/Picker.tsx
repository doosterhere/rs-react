import { forwardRef, useId, useState } from 'react';

import { UseFormRegister } from 'react-hook-form';

import classes from './Picker.module.scss';

import { useAutocomplete } from '@/hooks/useAutocomplete';

import { FormDataType } from '@/types/formData.type';

type Props = {
  label: string;
  dataList: string[];
  message?: string;
  value?: string;
  onChanging?: (value: string) => void;
  register?: UseFormRegister<FormDataType>;
};

const Picker = forwardRef(
  (
    { label, dataList, message, value, onChanging, register, ...attr }: Props,
    ref?: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();
    const [innerValue, setInnerValue] = useState('');
    const { listVisible, filteredList, selectedCountry, handleChange, handleFocus, handleListClick } = useAutocomplete(
      dataList,
      id,
      value ?? innerValue,
      onChanging ?? setInnerValue,
    );

    return (
      <label className={classes.label}>
        {label}:
        <input
          type="text"
          id={`picker-input-${id}`}
          className={classes.input}
          value={value ?? innerValue}
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

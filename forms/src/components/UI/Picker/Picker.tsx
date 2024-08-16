import { useEffect, useId, useState } from 'react';

import classes from './Picker.module.scss';

type Props = {
  label: string;
  dataList: string[];
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Picker({ label, dataList, required = false, ...attr }: Props) {
  const id = useId();
  const [value, setValue] = useState<string>('');
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<string[]>(dataList);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  useEffect(() => {
    setFilteredList(dataList.filter(country => country.toLowerCase().includes(value.toLowerCase())));

    if (value) {
      setListVisible(true);
    } else {
      setListVisible(false);
    }
  }, [value, dataList]);

  const handleListClick = (country: string) => {
    setValue(country);
    setListVisible(false);
    setSelectedCountry(country);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSelectedCountry('');
    setListVisible(true);
  };

  const handleFocus = () => {
    if (value) {
      setListVisible(true);
    }
  };

  const handleBlur = () => {
    //the only solution I've found
    setTimeout(() => setListVisible(false), 150);
  };

  return (
    <label htmlFor={id} className={classes.label}>
      {(required ? '* ' : '') + label}:
      <input
        id={id}
        {...attr}
        className={classes.input}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="one-time-code"
      />
      {listVisible && filteredList.length > 0 && !selectedCountry && (
        <ul className={classes.list}>
          {filteredList.map(country => (
            <li key={country} onClick={() => handleListClick(country)}>
              {country}
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}
export { Picker };

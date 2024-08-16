import classes from './Picker.module.scss';
import { useAutocomplete } from '../../../hooks/useAutocomplete';

type Props = {
  label: string;
  dataList: string[];
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Picker({ label, dataList, required = false, ...attr }: Props) {
  const { value, listVisible, filteredList, selectedCountry, handleChange, handleFocus, handleBlur, handleListClick } =
    useAutocomplete(dataList);

  return (
    <label className={classes.label}>
      {(required ? '* ' : '') + label}:
      <input
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

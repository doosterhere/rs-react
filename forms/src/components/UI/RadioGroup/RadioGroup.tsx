import { forwardRef, useState } from 'react';
import classes from './RadioGroup.module.scss';

type Props = {
  label: string;
  options: string[];
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const RadioGroup = forwardRef(
  ({ label, options, message, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
    const [value, setValue] = useState(options[0]);

    return (
      <div className={classes.group}>
        {label}:
        <div className={classes.groups} ref={ref} data-value={value}>
          {options.map((option, index) => {
            return (
              <div className={classes.option} key={option}>
                <input
                  type="radio"
                  id={option}
                  name={label}
                  value={option}
                  ref={typeof ref === 'function' ? ref : null}
                  defaultChecked={index === 0}
                  className={classes.input}
                  onChange={typeof ref === 'function' ? () => {} : e => setValue(e.target.value)}
                  {...attr}
                />
                <label htmlFor={option} className={classes.label}>
                  {option}
                </label>
              </div>
            );
          })}
        </div>
        {message && <span className={classes.error}>{message}</span>}
      </div>
    );
  },
);

export { RadioGroup };

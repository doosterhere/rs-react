import { forwardRef } from 'react';
import classes from './RadioGroup.module.scss';

type Props = {
  label: string;
  options: string[];
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const RadioGroup = forwardRef(
  ({ label, options, message, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={classes.group}>
        {label}:
        <div className={classes.groups}>
          {options.map((option, index) => {
            return (
              <div className={classes.option} key={option}>
                <input
                  type="radio"
                  id={option}
                  value={option}
                  defaultChecked={index === 0}
                  className={classes.input}
                  ref={ref}
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

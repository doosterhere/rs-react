import { forwardRef } from 'react';
import classes from './RadioGroup.module.scss';

type Props = {
  label: string;
  options: string[];
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const RadioGroup = forwardRef(
  ({ label, options, name, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={classes.group}>
        {'* ' + label}:
        <div className={classes.groups}>
          {options.map((option, index) => {
            return (
              <div className={classes.option} key={option}>
                <input
                  type="radio"
                  name={name}
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
      </div>
    );
  },
);

export { RadioGroup };

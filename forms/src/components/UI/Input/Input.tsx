import { forwardRef } from 'react';

import classes from './Input.module.scss';

type Props = {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(({ label, required = false, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <label className={classes.label}>
      {(required ? '* ' : '') + label}:
      <input className={classes.input} required={required} ref={ref || undefined} {...attr} />
    </label>
  );
});

export { Input };

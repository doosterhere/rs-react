import { forwardRef } from 'react';

import classes from './Input.module.scss';

type Props = {
  label: string;
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(({ label, message, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <label className={classes.label}>
      {label}:
      <input className={classes.input} ref={ref} {...attr} />
      {message && <span className={classes.error}>{message}</span>}
    </label>
  );
});

export { Input };

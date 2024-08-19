import { forwardRef } from 'react';

import classes from './Input.module.scss';

import { PasswordStrengthMeter } from '../PasswordStrengthMeter';

type Props = {
  label: string;
  message?: string;
  password?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(({ label, message, password, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <label className={classes.label}>
      {label}:
      <input className={classes.input} ref={ref} {...attr} />
      {attr.type === 'password' && label.toLowerCase() === 'Password'.toLowerCase() && (
        <PasswordStrengthMeter password={password || ''} />
      )}
      {message && <span className={classes.error}>{message}</span>}
    </label>
  );
});

export { Input };

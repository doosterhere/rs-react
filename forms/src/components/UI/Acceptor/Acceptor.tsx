import { forwardRef } from 'react';

import classes from './Acceptor.module.scss';

type Props = {
  label: string;
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Acceptor = forwardRef(({ label, message, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={classes.acceptor}>
      <label className={classes.label}>
        <input type="checkbox" className={classes.input} ref={ref} {...attr} />
        <span />
        {label}
        {message && <span className={classes.error}>{message}</span>}
      </label>
    </div>
  );
});

export { Acceptor };

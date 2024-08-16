import { forwardRef } from 'react';

import classes from './Acceptor.module.scss';

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Acceptor = forwardRef(({ label, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={classes.acceptor}>
      <label className={classes.label}>
        <input type="checkbox" className={classes.input} required ref={ref} {...attr} />
        <span />
        {label}
      </label>
    </div>
  );
});

export { Acceptor };

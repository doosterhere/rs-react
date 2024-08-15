import { useId } from 'react';

import classes from './Acceptor.module.scss';

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Acceptor({ label, ...attr }: Props) {
  const id = useId();

  return (
    <div className={classes.acceptor}>
      <label htmlFor={id} className={classes.label}>
        <input type="checkbox" id={id} className={classes.input} {...attr} required />
        <span />
        {label}
      </label>
    </div>
  );
}
export { Acceptor };

import { useId } from 'react';

import classes from './Input.module.scss';

type Props = {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, required = false, ...attr }: Props) {
  const id = useId();
  return (
    <label htmlFor={id} className={classes.label}>
      {(required ? '* ' : '') + label}:
      <input id={id} className={classes.input} required={required} {...attr} />
    </label>
  );
}
export { Input };

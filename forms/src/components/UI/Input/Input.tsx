import classes from './Input.module.scss';

type Props = {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, required = false, ...attr }: Props) {
  return (
    <label className={classes.label}>
      {(required ? '* ' : '') + label}:
      <input className={classes.input} required={required} {...attr} />
    </label>
  );
}
export { Input };

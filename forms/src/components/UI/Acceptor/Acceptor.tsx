import classes from './Acceptor.module.scss';

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Acceptor({ label, ...attr }: Props) {
  return (
    <div className={classes.acceptor}>
      <label className={classes.label}>
        <input type="checkbox" className={classes.input} {...attr} required />
        <span />
        {label}
      </label>
    </div>
  );
}
export { Acceptor };

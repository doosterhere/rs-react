import classes from './Button.module.scss';

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children }: Props) {
  return <button className={classes.button}>{children}</button>;
}
export { Button };

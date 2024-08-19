import classes from './Button.module.scss';

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...attr }: Props) {
  return (
    <button className={classes.button} {...attr}>
      {children}
    </button>
  );
}
export { Button };

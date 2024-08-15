import classes from './RadioGroup.module.scss';

type Props = {
  label: string;
  options: string[];
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
function RadioGroup({ label, options, name, ...attr }: Props) {
  return (
    <div className={classes.group}>
      {'* ' + label}:
      <div className={classes.groups}>
        {options.map((option, index) => {
          return (
            <div className={classes.option} key={option}>
              <input
                type="radio"
                name={name}
                id={option}
                value={option}
                defaultChecked={index === 0}
                className={classes.input}
                {...attr}
              />
              <label htmlFor={option} className={classes.label}>
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export { RadioGroup };

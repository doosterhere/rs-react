import { ChangeEvent, useId } from 'react';

import classes from './UploadFile.module.scss';

type Props = {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function UploadFile({ label, required = false, ...rest }: Props) {
  const id = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const size = e.target.files?.[0]?.size || 0;
    console.log(size);
  };

  return (
    <div className={classes.uploader}>
      <label htmlFor={id} className={classes.label}>
        {(required ? '* ' : '') + label}:
        <input type="file" id={id} onChange={handleChange} className={classes.input} {...rest} />
      </label>
    </div>
  );
}
export { UploadFile };

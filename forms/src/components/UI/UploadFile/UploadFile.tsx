import { ChangeEvent, useId } from 'react';

import classes from './UploadFile.module.scss';

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function UploadFile({ label, ...rest }: Props) {
  const id = useId();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const size = e.target.files?.[0]?.size || 0;
    console.log(size);
  };

  return (
    <div className={classes.uploader}>
      <label htmlFor={id} className={classes.label}>
        {label}
        <input type="file" id={id} onChange={handleChange} className={classes.input} {...rest} />
      </label>
    </div>
  );
}
export { UploadFile };

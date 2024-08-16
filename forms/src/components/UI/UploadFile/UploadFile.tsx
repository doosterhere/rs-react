import { ChangeEvent } from 'react';

import classes from './UploadFile.module.scss';

type Props = {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function UploadFile({ label, required = false, ...attr }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const size = e.target.files?.[0]?.size || 0;
    console.log(size);
  };

  return (
    <div className={classes.uploader}>
      <label className={classes.label}>
        {(required ? '* ' : '') + label}:
        <input type="file" onChange={handleChange} className={classes.input} {...attr} />
      </label>
    </div>
  );
}
export { UploadFile };

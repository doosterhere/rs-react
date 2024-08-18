import { ChangeEvent, forwardRef } from 'react';

import classes from './UploadFile.module.scss';

type Props = {
  label: string;
  message?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const UploadFile = forwardRef(({ label, message, ...attr }: Props, ref?: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={classes.uploader}>
      <label className={classes.label}>
        {label}:
        <input type="file" className={classes.input} ref={ref} {...attr} />
        {message && <span className={classes.error}>{message}</span>}
      </label>
    </div>
  );
});

export { UploadFile };

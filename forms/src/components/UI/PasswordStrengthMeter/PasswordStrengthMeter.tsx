import { useEffect, useRef, useState } from 'react';

import zxcvbn from 'zxcvbn-typescript';

import classes from './PasswordStrengthMeter.module.scss';

type Props = {
  password: string;
};

function PasswordStrengthMeter({ password }: Props) {
  const [strength, setStrength] = useState(0);
  const backgroundColor = useRef<string>('');
  const textColor = useRef<string>('');
  const text = useRef<string>('');

  if (strength < 2) {
    backgroundColor.current = 'red';
    textColor.current = 'black';
    text.current = 'Weak';
  } else if (strength <= 2) {
    backgroundColor.current = 'orange';
    textColor.current = 'black';
    text.current = 'Fair';
  } else if (strength <= 3) {
    backgroundColor.current = 'green';
    textColor.current = 'white';
    text.current = 'Good';
  } else {
    backgroundColor.current = 'green';
    textColor.current = 'white';
    text.current = 'Strong';
  }

  useEffect(() => {
    if (password) setStrength(zxcvbn(password).score);
  }, [password]);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.meter}
        style={{
          width: `${strength * 25}%`,
          backgroundColor: backgroundColor.current,
        }}
      ></div>
      <span className={classes.text} style={{ color: textColor.current }}>
        {text.current}
      </span>
    </div>
  );
}
export { PasswordStrengthMeter };

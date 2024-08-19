import { useEffect, useState } from 'react';

import zxcvbn from 'zxcvbn-typescript';

import classes from './PasswordStrengthMeter.module.scss';

import { useStrength } from '@/hooks/useStrength';

type Props = {
  password: string;
};

function PasswordStrengthMeter({ password }: Props) {
  const [strength, setStrength] = useState(0);
  const { backgroundColor, color, text } = useStrength(strength);

  useEffect(() => {
    if (password) setStrength(zxcvbn(password).score);
  }, [password]);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.meter}
        style={{
          width: `${strength * 25}%`,
          backgroundColor,
          visibility: strength ? 'visible' : 'hidden',
        }}
      ></div>
      <span className={classes.text} style={{ color }}>
        {text}
      </span>
    </div>
  );
}

export { PasswordStrengthMeter };

import { useRef } from 'react';

const useStrength = (strength: number) => {
  const backgroundColor = useRef<string>('');
  const color = useRef<string>('');
  const text = useRef<string>('');

  switch (strength) {
    case 1:
      backgroundColor.current = 'red';
      color.current = 'black';
      text.current = 'Weak';
      break;
    case 2:
      backgroundColor.current = 'gold';
      color.current = 'black';
      text.current = 'Fair';
      break;
    case 3:
      backgroundColor.current = 'green';
      color.current = 'white';
      text.current = 'Good';
      break;
    case 4:
      backgroundColor.current = 'darkgreen';
      color.current = 'white';
      text.current = 'Strong';
      break;
    default:
      backgroundColor.current = 'red';
      color.current = 'black';
      text.current = 'Weakest';
  }

  return { backgroundColor: backgroundColor.current, color: color.current, text: text.current };
};

export { useStrength };

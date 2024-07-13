import { useState } from 'react';

const ButtonErrorTest = () => {
  const [hasError, setHasError] = useState(false);

  const handleThrowError = () => {
    setHasError(true);
  };

  if (hasError) {
    throw new Error('Throwing the error while rendering');
  }

  return (
    <>
      <button type="button" className="button-error" onClick={handleThrowError}>
        Throw an error
      </button>
    </>
  );
};

export default ButtonErrorTest;

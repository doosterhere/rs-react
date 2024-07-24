import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const storedQuery = localStorage.getItem(key);

    if (storedQuery) {
      setValue(storedQuery);
      setRestored(true);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, value);

    return () => {
      localStorage.setItem(key, value);
    };
  }, [key, value]);

  return { value, setValue, restored };
};

export default useLocalStorage;

import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const storedQuery = localStorage.getItem(key);
    if (storedQuery) {
      setValue(storedQuery);
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, value);

    return () => {
      localStorage.setItem(key, value);
    };
  }, [key, value]);

  return { value, setValue };
};

export default useLocalStorage;

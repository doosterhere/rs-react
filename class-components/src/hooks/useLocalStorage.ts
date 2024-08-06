import { useState, useEffect, useCallback } from 'react';

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [storedValue, setStoredValue] = useState<string | undefined>();

  const setValue = useCallback(
    (value: string) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  useEffect(() => {
    const value = window.localStorage.getItem(key);

    if (value) {
      try {
        const parsed = JSON.parse(value);
        setStoredValue(parsed);
      } catch (error) {
        console.log(error);
        setStoredValue(defaultValue);
      }
    }

    if (!value) {
      setStoredValue(defaultValue);
    }
  }, [defaultValue, key]);

  useEffect(() => {
    if (typeof storedValue === 'string') {
      setValue(storedValue);
    }
  }, [storedValue, setValue]);

  return { storedValue, setStoredValue } as const;
};

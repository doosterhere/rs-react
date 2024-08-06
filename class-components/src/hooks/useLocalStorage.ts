import { useState, useEffect, useCallback } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [storedValue, setStoredValue] = useState<T | undefined>();

  const setValue = useCallback(
    (value: T) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

  useEffect(() => {
    const value = window.localStorage.getItem(key);

    if (value) {
      try {
        const parsed = JSON.parse(value) as T;
        setStoredValue(parsed);
      } catch (error) {
        console.log(error);
        setStoredValue(defaultValue);
      }
    } else {
      setStoredValue(defaultValue);
    }
  }, [defaultValue, key]);

  useEffect(() => {
    if (typeof storedValue === 'string') {
      setValue(storedValue);
    }
  }, [storedValue, setValue]);

  return [storedValue as T, setStoredValue] as const;
};

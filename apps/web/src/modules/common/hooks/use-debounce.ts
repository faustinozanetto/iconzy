import { useEffect, useState } from 'react';

/**
 * Custom hook for debounce effect.
 * @template T The type of the value.
 * @param value The value to watch.
 * @param delay The delay of the debounce.
 * @returns The debounced value.
 */
const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

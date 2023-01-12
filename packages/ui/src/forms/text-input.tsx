import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/use-debounce';

export type TextInputInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;
  onValueChanged: (value: string) => void;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputInputProps>((props, ref) => {
  const { id, label, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<string>(rest.placeholder || '');
  const debouncedValue = useDebounce<string>(value, 100);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { value } = event.target as HTMLInputElement;
    setValue(value);
  };

  useEffect(() => {
    onValueChanged(value);
  }, [debouncedValue]);

  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm font-semibold text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
});
TextInput.displayName = 'Text Input';

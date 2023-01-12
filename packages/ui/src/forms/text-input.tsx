import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/use-debounce';

export type TextInputInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label?: string;
  icon?: JSX.Element;
  onValueChanged: (value: string) => void;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputInputProps>((props, ref) => {
  const { id, icon, label, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<string>('');
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
    <div className="relative">
      {icon ? <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">{icon}</div> : null}
      {label ? (
        <label htmlFor={id} className="block mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
      ) : null}
      <input
        id={id}
        ref={ref}
        className={clsx(
          'bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
          icon ? 'pl-10' : ''
        )}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
});
TextInput.displayName = 'Text Input';

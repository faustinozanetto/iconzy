import clsx from 'clsx';
import React, { useState } from 'react';

export type TextInputInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label?: string;
  icon?: JSX.Element;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * @returns void.
   */
  onValueChanged: (value: string) => void;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputInputProps>((props, ref) => {
  const { id, icon, label, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: updatedValue } = event.target as HTMLInputElement;
    setValue(updatedValue);
    onValueChanged(updatedValue);
  };

  return (
    <div className="relative">
      {label ? (
        <label htmlFor={id} className="mb-1 block text-sm font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
      ) : null}
      <div className="relative">
        {icon ? <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">{icon}</div> : null}
        <input
          id={id}
          ref={ref}
          className={clsx(
            'focus-visible:ring-primary-500 focus-visible:border-primary-500 dark:focus-visible:ring-primary-500 dark:focus-visible:border-primary-500 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400',
            icon ? 'pl-10' : ''
          )}
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </div>
  );
});
TextInput.displayName = 'Text Input';

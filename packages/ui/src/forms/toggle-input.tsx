import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { InputWrapper } from './input-wrapper';

export type ToggleInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  id: string;
  label: string;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * ;@returns void.
   */
  onValueChanged: (value: boolean) => void;
};
export const ToggleInput = React.forwardRef<HTMLInputElement, ToggleInputProps>((props, ref) => {
  const { id, label, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement;
    setValue(checked);
  };

  useEffect(() => {
    onValueChanged(value);
  }, [value]);

  return (
    <InputWrapper
      id={id}
      label={label}
      disabled={rest.disabled || false}
      onInputReseted={() => {
        setValue(false);
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Toggle me</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            id={id}
            ref={ref}
            className="sr-only peer"
            type="checkbox"
            checked={value}
            onChange={handleChange}
            {...rest}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600"></div>
        </label>
      </div>
    </InputWrapper>
  );
});
ToggleInput.displayName = 'Toggle Input';

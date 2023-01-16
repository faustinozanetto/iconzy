import React, { useEffect, useState } from 'react';

import useDebounce from '../hooks/use-debounce';
import { InputWrapper } from './input-wrapper';

export type ColorInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * @returns void.
   */
  onValueChanged: (value: string) => void;
};

export const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>((props, ref) => {
  const { id = 'default-id', label, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<string>(rest.placeholder || '');
  const debouncedValue = useDebounce<string>(value, 100);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: updatedValue } = event.target as HTMLInputElement;
    setValue(updatedValue);
  };

  useEffect(() => {
    onValueChanged(value);
  }, [debouncedValue]);

  return (
    <InputWrapper
      id={id}
      label={label}
      disabled={rest.disabled || false}
      onInputReseted={() => {
        setValue(rest.placeholder || '#a781ee');
      }}
    >
      <div className="flex items-center justify-between">
        <input
          className="color-input h-12 w-11 cursor-pointer appearance-none border-none"
          id={id}
          ref={ref}
          type="color"
          value={value}
          onChange={handleChange}
          {...rest}
        />

        <input
          id={id}
          className="h-10 max-w-[120px] rounded-md border-[1px] border-neutral-300 bg-neutral-100 p-2 text-start font-bold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          type="text"
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </InputWrapper>
  );
});
ColorInput.displayName = 'Color Input';

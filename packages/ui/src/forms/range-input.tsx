import React, { useEffect, useState } from 'react';

import useDebounce from '../hooks/use-debounce';
import { InputWrapper } from './input-wrapper';

export type RangeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;

  /**
   * Callback function called when the value changes.
   * @param value New value
   * ;@returns void.
   */
  onValueChanged: (value: number) => void;
};

export const RangeInput = React.forwardRef<HTMLInputElement, RangeInputProps>((props, ref) => {
  const { id = 'default-id', label, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<number>(Number(rest.placeholder) || 0);
  const debouncedValue = useDebounce<number>(value, 100);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: updatedValue } = event.target as HTMLInputElement;
    setValue(Number(updatedValue));
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
        setValue(Number(rest.placeholder) || 0);
      }}
    >
      <div className="flex items-center justify-between">
        <input
          id={id}
          ref={ref}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-neutral-200 dark:bg-neutral-700"
          type="range"
          value={value}
          onChange={handleChange}
          {...rest}
        />
        <input
          id={id}
          className="ml-4 h-9 max-w-[50px] rounded-lg border-[1px] border-neutral-300 bg-neutral-100 text-center font-bold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
          type="text"
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </InputWrapper>
  );
});
RangeInput.displayName = 'Range Input';

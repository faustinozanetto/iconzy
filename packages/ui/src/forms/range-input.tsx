import React, { useEffect, useState } from 'react';
import useDebounce from '../hooks/use-debounce';
import { InputWrapper } from './input-wrapper';

export type RangeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;
  onValueChanged: (value: number) => void;
};

export const RangeInput = React.forwardRef<HTMLInputElement, RangeInputProps>((props, ref) => {
  const { id = 'default-id', label, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<number>(Number(rest.placeholder) || 0);
  const debouncedValue = useDebounce<number>(value, 100);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const { value } = event.target as HTMLInputElement;
    setValue(value);
  };

  useEffect(() => {
    onValueChanged(value);
  }, [debouncedValue]);

  return (
    <InputWrapper
      id={id}
      label={label}
      onInputReseted={() => {
        setValue(Number(rest.placeholder) || 0);
      }}
    >
      <div className="flex items-center justify-between">
        <input
          id={id}
          ref={ref}
          className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700"
          type="range"
          value={value}
          onChange={handleChange}
          {...rest}
        />
        <input
          id={id}
          className="max-w-[50px] ml-4 text-center rounded-lg h-9 font-bold border-neutral-300 border-[1px] dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
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

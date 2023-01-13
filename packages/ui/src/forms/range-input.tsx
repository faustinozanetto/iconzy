import React, { useEffect, useState } from 'react';
import { Button } from '../button/button';
import useDebounce from '../hooks/use-debounce';

export type RangeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;
  onValueChanged: (value: number) => void;
};

export const RangeInput = React.forwardRef<HTMLInputElement, RangeInputProps>((props, ref) => {
  const { id, label, onValueChanged, ...rest } = props;
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
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
        <Button
          size="xs"
          colorScheme="red"
          variant="ghost"
          onClick={() => {
            setValue(Number(rest.placeholder) || 0);
          }}
        >
          Reset
        </Button>
      </div>
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
    </div>
  );
});
RangeInput.displayName = 'Range Input';

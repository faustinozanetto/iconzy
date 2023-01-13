import React, { useEffect, useState } from 'react';
import { Button } from '..';
import useDebounce from '../hooks/use-debounce';

export type ColorInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'classsName' | 'onChange'> & {
  label: string;
  onValueChanged: (value: string) => void;
};

export const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>((props, ref) => {
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
    <div className="">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
        <Button
          size="xs"
          colorScheme="red"
          variant="ghost"
          onClick={() => {
            setValue(rest.placeholder || '#000000');
          }}
        >
          Reset
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <input
          className="w-11 h-12 border-none cursor-pointer appearance-none color-input"
          id={id}
          ref={ref}
          type="color"
          value={value}
          onChange={handleChange}
          {...rest}
        />

        <input
          id={id}
          className="max-w-[120px] text-start p-2 rounded-md h-10 font-bold border-neutral-300 border-[1px] dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
          type="text"
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </div>
    </div>
  );
});
ColorInput.displayName = 'Color Input';

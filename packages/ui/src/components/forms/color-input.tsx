import React, { useEffect, useState } from 'react';

import { InputWrapper } from './input-wrapper';
import { Input } from './input';

export type ColorInputProps = Omit<React.ComponentPropsWithoutRef<typeof Input>, 'classsName' | 'onChange'> & {
  label: string;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * ;@returns void.
   */
  onValueChange: (value: string) => void;
};

export const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>((props, ref) => {
  const { id = 'default-id', label, onValueChange, ...rest } = props;
  const [value, setValue] = useState<string>(rest.placeholder || '');

  useEffect(() => {
    onValueChange(value);
  }, [value]);

  return (
    <InputWrapper
      id={id}
      label={label}
      disabled={rest.disabled || false}
      onInputReseted={() => {
        setValue(rest.placeholder || '');
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <input
          id={id}
          ref={ref}
          type="color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="color-input h-12 w-11 shrink-0 cursor-pointer appearance-none border-none"
        />
        <Input
          id={`manual-${id}`}
          type="text"
          inputMode="numeric"
          value={value}
          className="h-10 w-full"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </InputWrapper>
  );
});
ColorInput.displayName = 'Range Input';

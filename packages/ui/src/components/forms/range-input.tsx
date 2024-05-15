import React, { useEffect, useState } from 'react';

import { Slider } from './slider';

import { InputWrapper } from './input-wrapper';
import { Input } from './input';

export type RangeInputProps = Omit<
  React.ComponentPropsWithoutRef<typeof Slider>,
  'classsName' | 'onChange' | 'onValueChange'
> & {
  label: string;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * ;@returns void.
   */
  onValueChange: (value: number) => void;
};

export const RangeInput = React.forwardRef<HTMLInputElement, RangeInputProps>((props, ref) => {
  const { id = 'default-id', label, onValueChange, ...rest } = props;
  const [value, setValue] = useState<number>(Number(rest.placeholder) || 0);

  useEffect(() => {
    onValueChange(Number(value));
  }, [value]);

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
        <Slider id={id} ref={ref} value={[value]} onValueChange={(v) => setValue(v[0])} {...rest} />
        <Input
          id={`manual-${id}`}
          type="text"
          inputMode="numeric"
          value={value}
          className="ml-4 h-9 max-w-[50px] rounded-lg font-semibold text-center"
          onChange={(e) => setValue(Number.parseInt(e.target.value))}
        />
      </div>
    </InputWrapper>
  );
});
RangeInput.displayName = 'Range Input';

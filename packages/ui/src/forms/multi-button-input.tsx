import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { InputWrapper } from './input-wrapper';

export type Option = {
  id: string;
  value: string;
};

export type MultiButtonInputProps = {
  id: string;
  /** Label to display */
  label: string;
  /** Options to select from */
  options: Option[];
  /** Optional: Default selected option */
  defaultSelected?: Option['id'];
  /**
   * Callback function called when the value changes.
   * @param value New value
   * @returns void.
   */
  onValueChanged: (value: string) => void;
};

export const MultiButtonInput = React.forwardRef<HTMLDivElement, MultiButtonInputProps>((props, ref) => {
  const { id, label, options, defaultSelected, onValueChanged, ...rest } = props;
  const [value, setValue] = useState<Option['id']>(defaultSelected || '');

  const handleChange = (selectedOption: Option['id']) => {
    setValue(selectedOption);
  };

  useEffect(() => {
    onValueChanged(value);
  }, [value]);

  return (
    <InputWrapper id={id} label={label} disabled={false} reseteable={false}>
      <div ref={ref} className="grid multi-button-wrapper gap-2">
        {options.map((option) => {
          const isCurrentlySelected = option.id === value;
          return (
            <Button
              size="sm"
              key={option.id}
              className="w-full"
              variant={isCurrentlySelected ? 'solid' : 'ghost'}
              onClick={() => handleChange(option.id)}
            >
              {option.value}
            </Button>
          );
        })}
      </div>
    </InputWrapper>
  );
});

MultiButtonInput.displayName = 'Multi Button Input';

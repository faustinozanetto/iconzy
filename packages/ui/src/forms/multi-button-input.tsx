import clsx from 'clsx';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Button } from '../button/button';
import { InputWrapper } from './input-wrapper';

export type MultiButtonInputOption<TValue extends React.ReactNode> = TValue;

export type MultiButtonInputProps<TValue extends React.ReactNode> = {
  id: string;
  /** Label to display */
  label: string;
  /** Options to select from */
  options: MultiButtonInputOption<TValue>[];
  /** Optional: Default selected option */
  defaultSelected?: MultiButtonInputOption<TValue>;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * @returns void.
   */
  onValueChanged: (value: MultiButtonInputOption<TValue>) => void;
  optionRender: (option: MultiButtonInputOption<TValue>) => string;
};

export const MultiButtonInput = <TValue extends React.ReactNode>(
  props: PropsWithChildren<MultiButtonInputProps<TValue>>
) => {
  const { id, label, options, defaultSelected, onValueChanged, optionRender, ...rest } = props;
  const [value, setValue] = useState<MultiButtonInputOption<TValue>>(defaultSelected || options[0]);

  const handleChange = (selectedOption: MultiButtonInputOption<TValue>) => {
    setValue(selectedOption);
  };

  useEffect(() => {
    onValueChanged(value);
  }, [value]);

  return (
    <InputWrapper id={id} label={label} disabled={false} reseteable={false}>
      <div className="grid multi-button-wrapper gap-2">
        {options.map((option) => {
          const isCurrentlySelected = option === value;
          return (
            <Button
              size="sm"
              // @ts-ignore
              key={option}
              className="w-full"
              variant={isCurrentlySelected ? 'solid' : 'ghost'}
              onClick={() => handleChange(option)}
            >
              {optionRender(option)}
            </Button>
          );
        })}
      </div>
    </InputWrapper>
  );
};

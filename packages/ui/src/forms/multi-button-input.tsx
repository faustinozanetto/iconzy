import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Button } from '../button/button';
import { ColorSchemes } from '../button/button-styles';
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
  colorScheme?: ColorSchemes;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * @returns void.
   */
  onValueChanged: (value: MultiButtonInputOption<TValue>) => void;
  /**
   * Custom function for rendering the option in the input.
   * @param option Input to parse.
   * @returns The parsed string to render.
   */
  optionRender: (option: MultiButtonInputOption<TValue>) => string;
};

export const MultiButtonInput = <TValue extends React.ReactNode>(
  props: PropsWithChildren<MultiButtonInputProps<TValue>>
) => {
  const { id, label, options, defaultSelected, colorScheme = 'primary', onValueChanged, optionRender } = props;
  const [value, setValue] = useState<MultiButtonInputOption<TValue>>(defaultSelected || options[0]);

  const handleChange = (selectedOption: MultiButtonInputOption<TValue>) => {
    setValue(selectedOption);
  };

  useEffect(() => {
    onValueChanged(value);
  }, [value]);

  useEffect(() => {
    if (defaultSelected) setValue(defaultSelected);
  }, [defaultSelected]);

  return (
    <InputWrapper id={id} label={label} disabled={false} reseteable={false}>
      <div className="grid multi-button-wrapper gap-2">
        {options.map((option) => {
          const isCurrentlySelected = option === value;
          return (
            <Button
              key={option?.toString()}
              size="sm"
              colorScheme={colorScheme}
              className="w-full"
              aria-label={`Option ${option}`}
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

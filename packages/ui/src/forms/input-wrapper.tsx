import React, { useState } from 'react';

import { Button } from '../button/button';

type InputWrapperProps = {
  /**
   * Id of the input element
   * */
  id: string;
  /**
   * Label of the input element
   */
  label: string;
  /**
   * Wether the input is disabled or not
   */
  disabled: boolean;
  /**
   * Optional: Wether the input should by initially collapsed or not */
  initiallyCollapsed?: boolean;
  /**
   * Callback function called when reset button is clicked
   */
  onInputReseted: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  const { id, label, disabled, onInputReseted, children, initiallyCollapsed = false } = props;
  const [inputCollapsed, setInputCollapsed] = useState(initiallyCollapsed);

  const handleInputCollapse = () => {
    setInputCollapsed((prev) => !prev);
  };

  const renderButtonIcon = () => {
    if (inputCollapsed)
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          viewBox="0 0 24 24"
        >
          <line y2="5" x2="12" y1="19" x1="12" width="35" height="35" strokeWidth="2" />
          <polyline points="5 12 12 5 19 12" width="35" height="35" strokeWidth="2" />
        </svg>
      );
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        viewBox="0 0 24 24"
      >
        <line y2="19" x2="12" y1="5" x1="12" width="35" height="35" strokeWidth="2" />
        <polyline points="19 12 12 19 5 12" width="35" height="35" strokeWidth="2" />
      </svg>
    );
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
        <div className="flex items-center space-x-1">
          <Button size="sm" aria-label="Reset Input" colorScheme="red" disabled={disabled} onClick={onInputReseted}>
            Reset
          </Button>
          <Button
            className="p-[5px]"
            size="sm"
            aria-label="Collapse Input"
            colorScheme="stone"
            onClick={handleInputCollapse}
          >
            {renderButtonIcon()}
          </Button>
        </div>
      </div>
      {!inputCollapsed ? children : null}
    </div>
  );
};

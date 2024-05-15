import React, { useState } from 'react';
import { Button } from '../button/button';
import { FadeAnimated } from '../../animation/fade-animated';
import { ChevronDownIcon, TrashIcon } from '../icons';
import { cn } from '../../lib/ui.lib';

interface InputWrapperProps {
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
  reseteable?: boolean;
  /**
   * Callback function called when reset button is clicked
   */
  onInputReseted?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = (props) => {
  const { id, label, disabled, onInputReseted, children, reseteable = true, initiallyCollapsed = false } = props;
  const [inputCollapsed, setInputCollapsed] = useState(initiallyCollapsed);

  const handleInputCollapse = () => {
    setInputCollapsed((prev) => !prev);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="block font-semibold text-sm">
          <span>{label}</span>
        </label>
        <div className="flex items-center space-x-1">
          {reseteable ? (
            <Button size="icon" variant="ghost" aria-label="Reset Input" disabled={disabled} onClick={onInputReseted}>
              <TrashIcon />
            </Button>
          ) : null}
          <Button size="icon" aria-label="Collapse Input" onClick={handleInputCollapse}>
            <ChevronDownIcon className={cn(inputCollapsed && 'rotate-180', 'transition-transform')} />
          </Button>
        </div>
      </div>
      {!inputCollapsed && children}
    </div>
  );
};

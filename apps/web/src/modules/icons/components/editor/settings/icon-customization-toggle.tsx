import { Button } from '@iconzy/ui';
import React from 'react';

type IconCustomizationToggleProps = {
  /** Callback funcion when the button is clicked */
  onClick: () => void;
};

const IconCustomizationToggle: React.FC<IconCustomizationToggleProps> = (props) => {
  const { onClick } = props;

  return (
    <Button aria-label="Toggle Customization" variant="ghost" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 stroke-current"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        stroke="#a781ee"
        fill="none"
        viewBox="0 0 24 24"
      >
        <line y2="12" x2="21" y1="12" x1="3" />
        <line y2="6" x2="21" y1="6" x1="3" />
        <line y2="18" x2="21" y1="18" x1="3" />
      </svg>
    </Button>
  );
};

export default IconCustomizationToggle;

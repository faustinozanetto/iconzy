import React from 'react';
import { IconButton } from 'ui';

type IconCustomizationToggleProps = {
  /** Callback funcion when the button is clicked */
  onClick: () => void;
};

const IconCustomizationToggle: React.FC<IconCustomizationToggleProps> = (props) => {
  const { onClick } = props;

  return (
    <IconButton
      aria-label="Toggle Customization"
      variant="ghost"
      onClick={onClick}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 stroke-black dark:stroke-white"
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
      }
    />
  );
};

export default IconCustomizationToggle;

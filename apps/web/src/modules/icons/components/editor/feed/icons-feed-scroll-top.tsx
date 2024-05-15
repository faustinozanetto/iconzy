import { Button } from '@iconzy/ui';
import React from 'react';

type IconsFeedScrollTopProps = {
  /** Callback function when the button is clicked */
  onClick: () => void;
};

const IconsFeedScrollTop: React.FC<IconsFeedScrollTopProps> = (props) => {
  const { onClick } = props;

  return (
    <Button aria-label="Scroll to Top" onClick={onClick} className="ml-auto" size="icon">
      <svg
        className="h-6 w-6 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        viewBox="0 0 24 24"
      >
        <line y2="5" x2="12" y1="19" x1="12" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </Button>
  );
};

export default IconsFeedScrollTop;

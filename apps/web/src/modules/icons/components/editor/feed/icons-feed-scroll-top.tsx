import React from 'react';
import { IconButton } from 'ui';

type IconsFeedScrollTopProps = {
  onClick: () => void;
};

const IconsFeedScrollTop: React.FC<IconsFeedScrollTopProps> = (props) => {
  const { onClick } = props;

  return (
    <div className="absolute right-0 bottom-0 mr-10 mb-2">
      <IconButton
        aria-label="Scroll to Top"
        onClick={onClick}
        icon={
          <svg
            className="h-6 w-6 stroke-neutral-700 dark:stroke-neutral-50"
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
        }
      />
    </div>
  );
};

export default IconsFeedScrollTop;

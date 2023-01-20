import { IconWithElement } from '@modules/icons/typings/icon.typings';
import { m } from 'framer-motion';
import React from 'react';
import { IconButton } from 'ui';

type SelectedIconsMenuIconProps = {
  /** Icon data */
  icon: IconWithElement;
  /** Callback when the remove icon is clicked */
  onRemovedClicked: () => void;
};

const SelectedIconsMenuIcon: React.FC<SelectedIconsMenuIconProps> = (props) => {
  const { icon, onRemovedClicked } = props;

  const removeIcon = (
    <svg
      className="h-5 w-5 stroke-neutral-800 dark:stroke-neutral-50"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="none"
      viewBox="0 0 24 24"
      height="50"
      width="50"
    >
      <line y2="18" x2="6" y1="6" x1="18" />
      <line y2="18" x2="18" y1="6" x1="6" />
    </svg>
  );

  return (
    <m.li
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
        },
      }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.15,
        type: 'spring',
        bounce: 0.2,
      }}
      className="relative flex justify-between p-2"
    >
      <div className="flex items-center space-x-2">
        {icon.element}
        <h4 className="font-medium">{icon.name}</h4>
      </div>
      <IconButton
        size="sm"
        colorScheme="red"
        aria-label="Remove Selected Icon"
        icon={removeIcon}
        onClick={onRemovedClicked}
      />
    </m.li>
  );
};

export default SelectedIconsMenuIcon;

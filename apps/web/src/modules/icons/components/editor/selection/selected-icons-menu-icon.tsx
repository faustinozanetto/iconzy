import { IconWithElement } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { IconButton } from 'ui';

type SelectedIconsMenuIconProps = {
  /** Icon data */
  icon: IconWithElement;
  /** TODO: Wether the icon is fill type or not. manage this better */
  isFillType: boolean;
  /** Callback when the remove icon is clicked */
  onRemovedClicked: () => void;
};

type ClonedIconProps = {
  [key: string]: unknown;
};

const SelectedIconsMenuIcon: React.FC<SelectedIconsMenuIconProps> = (props) => {
  const { icon, isFillType, onRemovedClicked } = props;

  const { height, width, ...filteredProps } = icon.element.props;

  const clonedIconProps: ClonedIconProps = {
    ...filteredProps,
    className: clsx(
      isFillType ? 'fill-neutral-800 dark:fill-neutral-50' : 'stroke-neutral-800 dark:stroke-neutral-50',
      'h-7 w-7'
    ),
  };

  const clonedIcon = React.cloneElement(icon.element, clonedIconProps);

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
    <motion.li
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
        {clonedIcon}
        <h4 className="font-medium">{icon.name}</h4>
      </div>
      <IconButton
        size="sm"
        colorScheme="red"
        aria-label="Remove Selected Icon"
        icon={removeIcon}
        onClick={onRemovedClicked}
      />
    </motion.li>
  );
};

export default SelectedIconsMenuIcon;

import { Button } from '@iconzy/ui';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-render';
import { useIconsStore } from '@modules/icons/state/icons.slice';
import { Icon } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import { m } from 'framer-motion';
import React from 'react';

interface SelectedIconsMenuIconProps {
  /** Icon data */
  icon: Icon;
  /** Callback when the remove icon is clicked */
  onRemovedClicked: () => void;
}

const SelectedIconsMenuIcon: React.FC<SelectedIconsMenuIconProps> = (props) => {
  const { icon, onRemovedClicked } = props;
  const { iconPack } = useIconsStore();

  const source = iconPack
    ? getSVGSourceIntoComponent(
        icon.source,
        iconPack.type,
        clsx(iconPack.type === 'fill' ? 'featured-icon-fill' : 'featured-icon', '!h-8 !w-8')
      )
    : null;

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
        {source}
        <h4 className="font-medium">{icon.name}</h4>
      </div>
      <Button size="icon" variant="destructive" aria-label="Remove Selected Icon" onClick={onRemovedClicked}>
        <svg
          className="h-5 w-5 stroke-background"
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
      </Button>
    </m.li>
  );
};

export default SelectedIconsMenuIcon;

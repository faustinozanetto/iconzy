import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import { IconsSelectionActionType } from '@modules/icons/context/selection/reducer/types';
import { getSVGSourceIntoComponent } from '@modules/icons/lib/icons-render';
import { useIconsStore } from '@modules/icons/state/icons.slice';
import type { Icon } from '@modules/icons/typings/icon.typings';
import clsx from 'clsx';
import React, { memo, useMemo } from 'react';

type IconEntryProps = {
  /** Icon data to display */
  icon: Icon;
  selected: boolean;
};

const IconEntry: React.FC<IconEntryProps> = (props) => {
  const { icon, selected } = props;
  const { dispatch } = useIconsSelectionContext();
  const { iconPack } = useIconsStore();

  const source = useMemo(() => {
    if (!iconPack) return null;

    return getSVGSourceIntoComponent(icon.source, iconPack.type);
  }, [icon.source, iconPack]);

  /**
   * Function
   * @returns Void
   */
  const handleIconSelected = () => {
    if (!selected) {
      dispatch({
        type: IconsSelectionActionType.ADD_SELECTED_ICON,
        payload: {
          icon: {
            ...icon,
          },
        },
      });
    } else {
      dispatch({
        type: IconsSelectionActionType.REMOVE_SELECTED_ICON,
        payload: {
          name: icon.name,
        },
      });
    }
  };

  return (
    <div
      className={clsx(
        'hover:border-primary group relative flex h-[175px] cursor-pointer justify-center overflow-hidden rounded-md border-2 p-4 transition-colors hover:border-4',
        selected ? '!border-primary' : ''
      )}
      onClick={handleIconSelected}
    >
      <div className="flex flex-col self-stretch">
        <div className="feed-icon-wrapper mx-auto flex flex-1 items-center justify-center">{source}</div>
        <span className="mb-1.5 text-center font-medium">{icon.name}</span>
      </div>
    </div>
  );
};

export default memo(IconEntry);

import type { Filter, Sort } from '@modules/common/hooks/use-filter';
import useFilter from '@modules/common/hooks/use-filter';
import { useIconsSelectionContext } from '@modules/icons/context/selection/icons-selection-context';
import type { Icon } from '@modules/icons/typings/icon.typings';
import React, { useRef } from 'react';
import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

import SelectedIcons from '../selection/selected-icons';
import IconsFeedFiltering from './icons-feed-filtering';
import IconsFeedScrollTop from './icons-feed-scroll-top';
import { useIconsStore } from '@modules/icons/state/icons.slice';
import IconEntry from '../../icons/icon-entry';

const IconsFeed: React.FC = () => {
  const { icons } = useIconsStore();
  const { state: iconsSelectionState } = useIconsSelectionContext();
  const feedContainer = useRef<VirtuosoGridHandle | null>(null);

  const initialFilters: Filter<Icon>[] = [{ property: 'name', value: '', enabled: true }];
  const initialSort: Sort<Icon> = {
    property: 'name',
    ascending: true,
  };
  const { filteredData, updateFilter, updateSort } = useFilter<Icon>(icons, initialFilters, initialSort);

  /**
   * Callback function when the name filter changes.
   * @param value New name filter.
   */
  const handleNameFilterChanged = (value: string) => {
    updateFilter({ property: 'name', value: value.toLowerCase(), enabled: true });
  };

  const handleScrollToTop = () => {
    if (feedContainer && feedContainer.current) {
      feedContainer.current.scrollToIndex({
        index: 0,
        align: 'center',
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b p-4 sm:items-center">
        <h2 className="text-lg font-medium md:text-xl">
          Browsing <span className="text-primary font-bold">{filteredData.length}</span> icons
        </h2>
        <IconsFeedFiltering onNameChanged={handleNameFilterChanged} />
      </div>
      <div className="relative h-full">
        <VirtuosoGrid
          ref={feedContainer}
          className="icons-container"
          totalCount={filteredData.length}
          overscan={25}
          data={filteredData}
          itemContent={(index, icon) => {
            const isIconSelected =
              iconsSelectionState.selectedIcons.find((selectedIcon) => selectedIcon.name === icon.name) !== undefined;

            return <IconEntry key={`icon-${index}`} icon={icon} selected={isIconSelected} />;
          }}
        />

        <div className="absolute bottom-0 my-2 flex w-full justify-between px-4">
          <SelectedIcons />
          <IconsFeedScrollTop onClick={handleScrollToTop} />
        </div>
      </div>
    </div>
  );
};

export default IconsFeed;

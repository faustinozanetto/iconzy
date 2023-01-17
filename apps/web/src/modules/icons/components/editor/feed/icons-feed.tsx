import type { Filter, Sort } from '@modules/common/hooks/use-filter';
import useFilter from '@modules/common/hooks/use-filter';
import { useIconsContext } from '@modules/icons/context/icons-context';
import { IconsActionType } from '@modules/icons/context/types';
import type { Icon, IconWithElement } from '@modules/icons/typings/icon.typings';
import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

import IconsFeedFiltering from './icons-feed-filtering';
import IconsFeedScrollTop from './icons-feed-scroll-top';

const LoadingIcon = () => {
  return (
    <div className="flex h-[175px] animate-pulse items-center justify-center rounded-md border-[2px] border-neutral-300 bg-neutral-50 text-xl font-bold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
      Loading
    </div>
  );
};

const IconEntry = dynamic(() => import('../../icons/icon-entry'), {
  ssr: false,
  loading: () => <LoadingIcon />,
});

const IconsFeed: React.FC = () => {
  const { state, dispatch } = useIconsContext();
  const feedContainer = useRef<VirtuosoGridHandle | null>(null);

  const initialFilters: Filter<Icon>[] = [{ property: 'name', value: '', enabled: true }];

  const initialSort: Sort<Icon> = {
    property: 'name',
    ascending: true,
  };

  const { filteredData, updateFilter, updateSort } = useFilter<Icon>(state.icons, initialFilters, initialSort);

  const handleIconSelected = (icon: IconWithElement) => {
    dispatch({
      type: IconsActionType.SET_SELECTED_ICON,
      payload: {
        icon,
      },
    });
  };

  const handleNameFilterChanged = (value: string) => {
    updateFilter({ property: 'name', value, enabled: true });
  };

  const handleSortChanged = (value: keyof Icon, criteria: 'asc' | 'des') => {
    updateSort({ property: value, ascending: criteria === 'asc' });
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
      <div className="md:grid-cols-filter grid items-center gap-2 border-b-[1px] border-b-neutral-300 p-4 dark:border-b-neutral-700 dark:bg-neutral-800 md:grid-cols-2">
        <h2 className="text-xl font-medium">
          Browsing <span className="text-primary-600 dark:text-primary-300 font-bold">{filteredData.length}</span> icons
        </h2>
        <IconsFeedFiltering onNameChanged={handleNameFilterChanged} onSortChanged={handleSortChanged} />
      </div>
      <div className="relative h-full">
        <VirtuosoGrid
          ref={feedContainer}
          style={{ height: '100%', margin: '1rem' }}
          totalCount={filteredData.length}
          overscan={10}
          data={filteredData}
          itemContent={(index, icon) => {
            return (
              <IconEntry
                key={`icon-${index}`}
                icon={{ ...icon, customization: state.iconCustomization }}
                isSelected={state.selectedIcon !== null && state.selectedIcon.name === icon.name}
                onIconSelected={(iconElement: JSX.Element) => {
                  handleIconSelected({ ...icon, element: iconElement });
                }}
              />
            );
          }}
        />
        <IconsFeedScrollTop onClick={handleScrollToTop} />
      </div>
    </div>
  );
};

export default IconsFeed;

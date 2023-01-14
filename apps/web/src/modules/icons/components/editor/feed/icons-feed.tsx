import React from 'react';
import dynamic from 'next/dynamic';

import { useIconsContext } from '@modules/icons/context/icons-context';
import { IconsActionType } from '@modules/icons/context/types';
import { Icon, IconWithElement } from '@modules/icons/typings/icon.typings';
import { VirtuosoGrid } from 'react-virtuoso';
import useFilter, { Filter, Sort } from '@modules/common/hooks/use-filter';
import IconsFeedFiltering from './icons-feed-filtering';

const LoadingIcon = () => {
  return (
    <div className="flex items-center justify-center rounded-md bg-neutral-50 border-neutral-300 border-[2px] dark:bg-neutral-800 dark:border-neutral-700 h-[150px] font-bold text-xl text-neutral-600 dark:text-neutral-200">
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

  const handleSortChanged = (value: keyof Icon, criteria: 'asc' | 'desc') => {
    console.log({ value, criteria });

    updateSort({ property: value, ascending: criteria === 'asc' });
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col space-y-2 md:!flex-row md:justify-between md:!space-y-0 md:items-center mb-4 p-4 border-b-neutral-300 border-b-[1px] dark:bg-neutral-800 dark:border-b-neutral-700">
        <h2 className="font-medium text-xl">
          Browsing <span className="font-bold text-primary-600 dark:text-primary-300">{filteredData.length}</span> icons
        </h2>
        <IconsFeedFiltering onNameChanged={handleNameFilterChanged} onSortChanged={handleSortChanged} />
      </div>
      <VirtuosoGrid
        style={{ height: '100%', margin: '0 0 0 1rem' }}
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
    </div>
  );
};

export default IconsFeed;

'use client';

import type { Filter, Sort } from '@modules/common/hooks/use-filter';
import useFilter from '@modules/common/hooks/use-filter';
import type { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import type { IconPack } from '@iconzy/icons-fetching';
import React, { useMemo } from 'react';

import IconPackCard from '../card/icon-pack-card';
import IconPacksBrowserFiltering from './icon-packs-browser-filtering';

type IconPacksBrowserTypes = {
  /** The list of icon packs with featured icons. */
  iconPacks: IconPackWithFeatured[];
};

const IconPacksBrowser: React.FC<IconPacksBrowserTypes> = (props) => {
  const { iconPacks } = props;

  const initialFilters: Filter<IconPack>[] = [
    { property: 'name', value: '', enabled: true },
    { property: 'iconsCount', value: 0, enabled: false },
  ];

  const initialSort: Sort<IconPack> = {
    property: 'iconsCount',
    ascending: false,
  };

  const mappedPacks: IconPack[] = iconPacks.map((pack) => {
    return {
      ...pack.metadata,
    };
  });

  const { filteredData, updateFilter, updateSort } = useFilter<IconPack>(mappedPacks, initialFilters, initialSort);

  /**
   * Callback function when the name changes.
   * @param filter The new name.
   */
  const handleNameFilterChanged = (filter: string) => {
    updateFilter({ property: 'name', value: filter, enabled: true });
  };

  /**
   * Callback function when the sort changes.
   * @param value The new sort.
   * @param criteria The sort criteria.
   */
  const handleSortChanged = (value: keyof IconPack, criteria: 'asc' | 'des') => {
    updateSort({ property: value, ascending: criteria === 'asc' });
  };

  const totalIconsCount = useMemo(() => {
    return filteredData.reduce((prev, curr) => {
      if (!curr.iconsCount) return prev;
      return prev + curr.iconsCount;
    }, 0);
  }, [filteredData]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b p-4">
        <h2 className="text-lg font-medium md:text-xl">
          Browsing <span className="text-primary font-bold">{filteredData.length}</span> packs and{' '}
          <span className="text-primary font-bold">{totalIconsCount}</span> icons
        </h2>
        <IconPacksBrowserFiltering onNameChanged={handleNameFilterChanged} onSortChanged={handleSortChanged} />
      </div>
      <div
        className="grid w-full items-center gap-4 p-4 md:ml-auto"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        }}
      >
        {filteredData.map((iconPack) => {
          const pack = iconPacks.find((p) => p.metadata.name === iconPack.name);
          if (pack) return <IconPackCard key={pack.metadata.name} iconPack={pack} />;
        })}
      </div>
    </div>
  );
};

export default IconPacksBrowser;

import useFilter, { Filter, Sort } from '@modules/common/hooks/use-filter';
import { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import { IconPackRaw } from 'icons-fetching';
import React, { useState } from 'react';
import { SelectInput, TextInput } from 'ui';
import IconPackCard from '../icon-pack-card';

type IconPacksBrowserTypes = {
  iconPacks: IconPackWithFeatured[];
};

const initialFilters: Filter<IconPackRaw>[] = [
  { property: 'name', value: '', enabled: true },
  { property: 'iconsCount', value: 0, enabled: false },
];

const initialSort: Sort<IconPackRaw> = {
  property: 'iconsCount',
  ascending: false,
};

const IconPacksBrowser: React.FC<IconPacksBrowserTypes> = (props) => {
  const { iconPacks } = props;
  const mappedPacks: IconPackRaw[] = iconPacks.map((pack) => {
    return {
      ...pack.metadata,
    };
  });
  const { filteredData, updateFilter } = useFilter<IconPackRaw>(mappedPacks, initialFilters, initialSort);

  const handleNameFilterChanged = (filter: string) => {
    // const newFilters = [...filters];
    // newFilters[0] = { ...newFilters[0], property: 'name', value: filter };
    // setFilters(newFilters);
    updateFilter({ property: 'name', value: filter, enabled: true });
  };

  const handleSortFilterChanged = (filter: keyof IconPackRaw) => {};

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center space-x-4 p-4 bg-neutral-50 border-b-[1px] border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
        <TextInput
          id="search-pack"
          label="Browse by Name"
          placeholder="Feather Icons"
          onValueChanged={handleNameFilterChanged}
        />
        <SelectInput
          id="sort-pack"
          label="Sort By"
          placeholder="Name"
          onChange={(event) => {
            handleSortFilterChanged(event.target.value as keyof IconPackRaw);
          }}
        >
          <option value="name">Name</option>
          <option value="iconsCount">Icon Count</option>
        </SelectInput>
      </div>
      <div
        className="grid gap-4 p-4 w-full sm:ml-auto items-center"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        }}
      >
        {filteredData.map((iconPack) => {
          const pack = iconPacks.find((p) => p.metadata.name === iconPack.name);
          if (pack) return <IconPackCard key={`pack-${pack.metadata.name}`} iconPack={pack} />;
        })}
      </div>
    </div>
  );
};

export default IconPacksBrowser;

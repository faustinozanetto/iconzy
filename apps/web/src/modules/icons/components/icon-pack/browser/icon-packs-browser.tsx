import useFilter, { Filter, Sort } from '@modules/common/hooks/use-filter';
import { IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import { IconPack } from 'icons-fetching';
import React from 'react';
import { SelectInput, TextInput } from 'ui';
import IconPackCard from '../icon-pack-card';

type IconPacksBrowserTypes = {
  iconPacks: IconPackWithFeatured[];
};

const initialFilters: Filter<IconPack>[] = [
  { property: 'name', value: '', enabled: true },
  { property: 'iconsCount', value: 0, enabled: false },
];

const initialSort: Sort<IconPack> = {
  property: 'iconsCount',
  ascending: false,
};

const SearchIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height="35"
      width="35"
      className="w-5 h-5 stroke-gray-500 dark:stroke-gray-400"
      strokeWidth="2"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
        width="35"
        height="35"
      />
    </svg>
  );
};

const IconPacksBrowser: React.FC<IconPacksBrowserTypes> = (props) => {
  const { iconPacks } = props;
  const mappedPacks: IconPack[] = iconPacks.map((pack) => {
    return {
      ...pack.metadata,
    };
  });
  const { filteredData, updateFilter } = useFilter<IconPack>(mappedPacks, initialFilters, initialSort);

  const handleNameFilterChanged = (filter: string) => {
    // const newFilters = [...filters];
    // newFilters[0] = { ...newFilters[0], property: 'name', value: filter };
    // setFilters(newFilters);
    updateFilter({ property: 'name', value: filter, enabled: true });
  };

  const handleSortFilterChanged = (filter: keyof IconPack) => {};

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center space-x-4 p-4 bg-neutral-50 border-b-[1px] border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
        <TextInput
          id="search-pack"
          label="Browse by Name"
          placeholder="Feather Icons"
          icon={<SearchIcon />}
          onValueChanged={handleNameFilterChanged}
        />
        <SelectInput
          id="sort-pack"
          label="Sort By"
          placeholder="Name"
          onChange={(event) => {
            handleSortFilterChanged(event.target.value as keyof IconPack);
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

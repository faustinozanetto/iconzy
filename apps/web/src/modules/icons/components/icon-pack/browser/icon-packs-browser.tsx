import useFilter, { Filter, Sort } from '@modules/common/hooks/use-filter';
import { IconPack, IconPackWithFeatured } from '@modules/icons/typings/icon.typings';
import React, { useState } from 'react';
import { SelectInput, TextInput } from 'ui';
import IconPackCard from '../icon-pack-card';

type IconPacksBrowserTypes = {
  iconPacks: IconPackWithFeatured[];
};

const initialFilters: Filter<IconPack>[] = [
  { property: 'slug', value: '', enabled: true },
  { property: 'iconsCount', value: 0, enabled: false },
];

const initialSort: Sort<IconPack> = {
  property: 'iconsCount',
  ascending: false,
};

const IconPacksBrowser: React.FC<IconPacksBrowserTypes> = (props) => {
  const { iconPacks } = props;
  const [filters, setFilters] = useState(initialFilters);
  const [sort, setSort] = useState<Sort<IconPack>>(initialSort);
  const mappedPacks: IconPack[] = iconPacks.map((pack) => {
    return {
      ...pack.metadata,
    };
  });
  const filteredIconPacks = useFilter<IconPack>(mappedPacks, filters, sort);

  const handleNameFilterChanged = (filter: string) => {
    const newFilters = [...filters];
    newFilters[0] = { ...newFilters[0], property: 'name', value: filter };
    setFilters(newFilters);
  };

  const handleSortFilterChanged = (filter: keyof IconPack) => {
    setSort({ property: filter, ascending: false });
  };

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
            handleSortFilterChanged(event.target.value as keyof IconPack);
          }}
        >
          <option value="name">Name</option>
          <option value="iconsCount">Icon Count</option>
        </SelectInput>
      </div>
      <div className="flex gap-4 p-4 justify-center">
        {filteredIconPacks.map((iconPack) => {
          const pack = iconPacks.find((p) => p.metadata.slug === iconPack.slug);
          if (pack) return <IconPackCard key={pack.metadata.slug} iconPack={pack} />;
        })}
      </div>
    </div>
  );
};

export default IconPacksBrowser;

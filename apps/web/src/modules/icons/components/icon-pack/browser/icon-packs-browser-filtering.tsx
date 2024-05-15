import type { IconPack } from '@iconzy/icons-fetching';
import React from 'react';
import { Input } from '@iconzy/ui';

interface IconPacksBrowserFilteringProps {
  /**
   * Callback function when the name changes.
   * @param value The new name.
   * @returns Void
   */
  onNameChanged: (value: string) => void;
  /**
   * Callback function when the sort changes.
   * @param value The new sort.
   * @param criteria The sort criteria.
   * @returns Void
   */
  onSortChanged: (value: keyof IconPack, criteria: 'asc' | 'des') => void;
}

const IconPacksBrowserFiltering: React.FC<IconPacksBrowserFilteringProps> = (props) => {
  const { onNameChanged, onSortChanged } = props;

  return (
    <div className="flex gap-2">
      {/* Name Filtering */}
      <Input
        id="search-packs"
        placeholder="Search Icon Packs"
        // icon={<SearchIcon />}
        onChange={(e) => onNameChanged(e.target.value)}
      />
      {/* Sort Filtering */}
      {/* <SelectInputSort
        id="sort-pack"
        placeholder="Sort Icon Packs"
        initialSortCriteria="asc"
        onValueChanged={(value, criteria) => {
          onSortChanged(value as keyof IconPack, criteria);
        }}
      >
        <option value="name">Name</option>
        <option value="iconsCount">Icons Count</option>
      </SelectInputSort> */}
    </div>
  );
};

export default IconPacksBrowserFiltering;

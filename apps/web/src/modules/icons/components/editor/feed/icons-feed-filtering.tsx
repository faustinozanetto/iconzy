import type { Icon } from '@modules/icons/typings/icon.typings';
import React, { useRef } from 'react';
import { SelectInputSort, TextInput } from 'ui';

const SearchIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height="35"
      width="35"
      className="h-5 w-5 stroke-gray-500 dark:stroke-gray-400"
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

type IconsFeedFilteringProps = {
  /**
   * Callback function when the name changes
   * @param value The new name value
   * @returns Void
   */
  onNameChanged: (value: string) => void;
  /**
   * Callback function when the sort changes
   * @param value  The new sort value
   * @param criteria The sort criteria
   * @returns Void
   */
  onSortChanged: (value: keyof Icon, criteria: 'asc' | 'des') => void;
};

const IconsFeedFiltering: React.FC<IconsFeedFilteringProps> = (props) => {
  const { onNameChanged, onSortChanged } = props;
  const inputNameRef = useRef<HTMLInputElement>(null);

  return (
    <div className="grid gap-2 md:grid-cols-2">
      {/* Name Filtering */}
      <TextInput
        ref={inputNameRef}
        id="search-icon"
        placeholder="Search Icons"
        icon={<SearchIcon />}
        onValueChanged={onNameChanged}
      />
      {/* Sort Filtering */}
      <SelectInputSort
        id="sort-icon"
        placeholder="Sort Icons"
        initialSortCriteria="asc"
        onValueChanged={(value, criteria) => {
          onSortChanged(value as keyof Icon, criteria);
        }}
      >
        <option value="name">Name</option>
      </SelectInputSort>
    </div>
  );
};

export default IconsFeedFiltering;

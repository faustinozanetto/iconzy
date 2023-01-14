import React from 'react';
import { Icon } from '@modules/icons/typings/icon.typings';
import { SelectInputSort, TextInput } from 'ui';

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

type IconsFeedFilteringProps = {
  onNameChanged: (value: string) => void;
  onSortChanged: (value: keyof Icon, criteria: 'asc' | 'des') => void;
};

const IconsFeedFiltering: React.FC<IconsFeedFilteringProps> = (props) => {
  const { onNameChanged, onSortChanged } = props;

  return (
    <div className="flex flex-col space-y-2 md:!flex-row md:space-x-2 md:!space-y-0 md:items-center md:justify-center">
      {/* Name Filtering */}
      <TextInput id="search-icon" placeholder="Search Icons" icon={<SearchIcon />} onValueChanged={onNameChanged} />
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

import React, { useRef, useState } from 'react';
import { Button } from '../button/button';

type SortCriteria = 'asc' | 'des';

export type SelectInputSortProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'classsName' | 'onChange'> & {
  label?: string;
  children: React.ReactNode;
  initialSortCriteria: SortCriteria;
  onValueChanged: (value: string, criteria: SortCriteria) => void;
};

export const SelectInputSort: React.FC<SelectInputSortProps> = (props) => {
  const { id, label, children, initialSortCriteria, onValueChanged, ...rest } = props;
  const selectInputRef = useRef<HTMLSelectElement | null>(null);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>(initialSortCriteria);

  const handleSortCriteria = () => {
    setSortCriteria((prev) => (prev === 'asc' ? 'des' : 'asc'));
    if (selectInputRef.current) {
      // @ts-ignore
      const selectValue = selectInputRef.current.value;
      handleSelectChanged(selectValue);
    }
  };

  const handleSelectChanged = (value: string) => {
    onValueChanged(value, sortCriteria);
  };

  return (
    <div className="relative">
      {label ? (
        <label htmlFor={id} className="block mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
      ) : null}
      <div className="flex space-x-1 items-center">
        <select
          id={id}
          ref={selectInputRef}
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          onChange={(event) => {
            // @ts-ignore
            handleSelectChanged(event.target.value);
          }}
          {...rest}
        >
          {children}
        </select>
        <Button
          className="!p-[6px] !h-[41px]"
          size="sm"
          aria-label="Change Criteria"
          colorScheme="stone"
          onClick={handleSortCriteria}
        >
          {sortCriteria === 'asc' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-neutral-800 dark:stroke-neutral-100 w-4 h-4"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <line y2="5" x2="12" y1="19" x1="12" width="35" height="35" strokeWidth="2" />
              <polyline points="5 12 12 5 19 12" width="35" height="35" strokeWidth="2" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-neutral-800 dark:stroke-neutral-100 w-4 h-4"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <line y2="19" x2="12" y1="5" x1="12" width="35" height="35" strokeWidth="2" />
              <polyline points="19 12 12 19 5 12" width="35" height="35" strokeWidth="2" />
            </svg>
          )}
        </Button>
      </div>
    </div>
  );
};

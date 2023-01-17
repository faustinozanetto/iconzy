import React, { useRef, useState } from 'react';
import { IconButton } from '../button/icon-button';

type SortCriteria = 'asc' | 'des';

export type SelectInputSortProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'classsName' | 'onChange'> & {
  children: React.ReactNode;
  label?: string;
  /** Initial value of the crtieria. */
  initialSortCriteria: SortCriteria;
  /**
   * Callback function called when the value changes.
   * @param value New value
   * @param criteria Criteria of the input, asc or des
   * @returns void.
   */
  onValueChanged: (value: string, criteria: SortCriteria) => void;
};

export const SelectInputSort: React.FC<SelectInputSortProps> = (props) => {
  const { id, label, children, initialSortCriteria, onValueChanged, ...rest } = props;
  const selectInputRef = useRef<HTMLSelectElement | null>(null);
  const [sortCriteria, setSortCriteria] = useState<SortCriteria>(initialSortCriteria);

  const handleSelectChanged = (value: string) => {
    onValueChanged(value, sortCriteria);
  };

  const handleSortCriteria = () => {
    setSortCriteria((prev) => (prev === 'asc' ? 'des' : 'asc'));
    if (selectInputRef.current) {
      const selectValue = selectInputRef.current.value;
      handleSelectChanged(selectValue);
    }
  };

  const sortCriteriaIcon =
    sortCriteria === 'asc' ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100"
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
        className="h-4 w-4 stroke-neutral-800 dark:stroke-neutral-100"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2"
        fill="none"
        viewBox="0 0 24 24"
      >
        <line y2="19" x2="12" y1="5" x1="12" width="35" height="35" strokeWidth="2" />
        <polyline points="19 12 12 19 5 12" width="35" height="35" strokeWidth="2" />
      </svg>
    );

  return (
    <div className="relative">
      {label ? (
        <label htmlFor={id} className="mb-1 block text-sm font-semibold text-gray-900 dark:text-white">
          <span>{label}</span>
        </label>
      ) : null}
      <div className="flex items-center space-x-1">
        <select
          id={id}
          ref={selectInputRef}
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder:text-neutral-400"
          onChange={(event) => {
            handleSelectChanged(event.target.value);
          }}
          {...rest}
        >
          {children}
        </select>
        <IconButton
          className="h-[41px]"
          aria-label="Change Criteria"
          colorScheme="stone"
          onClick={handleSortCriteria}
          icon={sortCriteriaIcon}
        />
      </div>
    </div>
  );
};

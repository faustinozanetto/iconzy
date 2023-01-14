import { useState, useEffect, useMemo } from 'react';

/**
 * The `Filter` type is used to define a filter that can be applied to a data set.
 *
 * @template TData The type of the data that the filter will be applied to.
 * @property {keyof TData} property The property of the data to filter on.
 * @property {TData[keyof TData]} value The value to filter on.
 * @property {boolean} enabled Whether or not the filter is enabled.
 */
export type Filter<TData> = {
  property: keyof TData;
  value: TData[keyof TData];
  enabled: boolean;
};

/**
 * The `Sort` type is used to define a sort that can be applied to a data set.
 *
 * @template TData The type of the data that the sort will be applied to.
 * @property {keyof TData} property The property of the data to sort on.
 * @property {boolean} ascending Whether or not the sort should be in ascending order.
 */
export type Sort<TData> = {
  property: keyof TData;
  ascending: boolean;
};

/**
 * The `useFilter` hook is used to filter and sort a data set.
 *
 * @template TData The type of the data that the filter will be applied to.
 * @param {TData[]} data The data to filter and sort.
 * @param {Filter<TData>[]} filters The filters to apply to the data.
 * @param {Sort<TData>} sort The sort to apply to the data.

 */
const useFilter = <TData>(data: TData[], initialFilters: Filter<TData>[], initialSort: Sort<TData>) => {
  // const [filteredData, setFilteredData] = useState<TData[]>(data);
  const [filters, setFilters] = useState<Filter<TData>[]>(initialFilters);
  const [sort, setSort] = useState<Sort<TData>>(initialSort);

  /*
  useEffect(() => {
    let filteredData = data;
    for (const filter of filters) {
      if (filter.enabled) {
        filteredData = filteredData.filter((item) => {
          if (typeof item[filter.property] === 'string') {
            // @ts-ignore
            return item[filter.property].includes(filter.value);
          } else {
            return item[filter.property] === filter.value;
          }
        });
      }
    }
    setFilteredData(filteredData);
  }, [filters]);

  useEffect(() => {
    let lfilteredData = [...filteredData];
    lfilteredData.sort((a, b) => {
      if (a[sort.property] < b[sort.property]) {
        return sort.ascending ? -1 : 1;
      }
      if (a[sort.property] > b[sort.property]) {
        return sort.ascending ? 1 : -1;
      }
      return 0;
    });
    setFilteredData(lfilteredData);
  }, [sort]);
  */

  const filteredData = useMemo(() => {
    let filteredData = data;
    for (const filter of filters) {
      if (filter.enabled) {
        filteredData = filteredData.filter((item) => {
          if (typeof item[filter.property] === 'string') {
            // @ts-ignore
            return item[filter.property].includes(filter.value);
          } else {
            return item[filter.property] === filter.value;
          }
        });
      }
    }
    filteredData.sort((a, b) => {
      if (a[sort.property] < b[sort.property]) {
        return sort.ascending ? -1 : 1;
      }
      if (a[sort.property] > b[sort.property]) {
        return sort.ascending ? 1 : -1;
      }
      return 0;
    });
    return filteredData;
  }, [filters, sort]);

  const updateSort = (sort: Sort<TData>) => {
    setSort(sort);
  };

  const updateFilter = (filter: Filter<TData>) => {
    setFilters((prev) => {
      const newFilters = [...prev];
      let filterToUpdate = prev.findIndex((fil) => fil.property === filter.property);
      if (filterToUpdate === -1) return newFilters;
      newFilters[filterToUpdate] = { ...filter };
      return newFilters;
    });
  };

  return { filteredData, updateSort, updateFilter };
};

export default useFilter;

import { useState, useEffect } from 'react';

export type Filter<T> = {
  property: keyof T;
  value: T[keyof T];
  enabled: boolean;
};

export type Sort<T> = {
  property: keyof T;
  ascending: boolean;
};

const useFilter = <T>(data: T[], filters: Filter<T>[], sort: Sort<T>) => {
  const [filteredData, setFilteredData] = useState<T[]>(data);

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

  return filteredData;
};

export default useFilter;

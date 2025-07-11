import { useMemo } from 'react';

interface UsePaginationReturn<T> {
  currentItems: T[];
  totalPages: number;
  startIndex: number;
  endIndex: number;
  goToPage: (page: number) => void;
}

export function usePagination<T>(
  items: T[],
  itemsPerPage: number,
  currentPage: number
): UsePaginationReturn<T> {
  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return {
      currentItems,
      totalPages,
      startIndex,
      endIndex,
    };
  }, [items, itemsPerPage, currentPage]);

  const goToPage = (page: number) => {};

  return {
    ...paginationData,
    goToPage,
  };
}

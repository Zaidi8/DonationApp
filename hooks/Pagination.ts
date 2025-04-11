import {useState, useEffect} from 'react';

const usePagination = <T>(data: T[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedData, setRenderedData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const paginate = (data: T[], page: number, pageSize: number) => {
    const startIndex = (page - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  };

  // Initialize the first page and reset when data or pageSize changes
  useEffect(() => {
    setRenderedData(paginate(data, 1, pageSize));
    setCurrentPage(1);
  }, [data, pageSize]);

  const loadMore = () => {
    if (isLoading) return;

    const nextPage = currentPage + 1;
    const newData = paginate(data, nextPage, pageSize);

    if (newData.length === 0) return; // No more data to load

    setIsLoading(true);

    const timer = setTimeout(() => {
      setRenderedData(prevData => [...prevData, ...newData]);
      setCurrentPage(nextPage);
      setIsLoading(false);
    });

    // Cleanup to avoid memory leaks
    return () => clearTimeout(timer);
  };

  return {renderedData, isLoading, loadMore};
};

export default usePagination;

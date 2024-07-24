import { FC, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface IPaginationProps {
  itemsCount: number;
}

const Pagination: FC<IPaginationProps> = ({ itemsCount }) => {
  const pagesCount = Math.ceil(itemsCount / 10);
  const pages = useMemo(() => Array.from({ length: pagesCount }, (_, index) => index + 1), [itemsCount]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activePage, setActivePage] = useState('1');

  useEffect(() => {
    const page = searchParams.get('page');

    if (page) {
      setActivePage(page);
    }
  }, [searchParams]);

  const handlePageClick = (page: number) => {
    const search = searchParams.get('search') || '';
    setActivePage(page.toString());
    setSearchParams({ search, page: page.toString() });
  };

  return (
    <div className="pagination">
      {pages.map(page => (
        <div
          className={`pagination-page ${page === Number(activePage) ? 'active' : ''}`}
          key={page}
          onClick={() => handlePageClick(page)}
          role="button"
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export { Pagination };

import { FC, useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { clsx } from 'clsx/lite';

import classes from './Pagination.module.css';

interface IPaginationProps {
  itemsCount: number;
}

const Pagination: FC<IPaginationProps> = ({ itemsCount }) => {
  const pagesCount = Math.ceil(itemsCount / 10);
  const pages = useMemo(() => Array.from({ length: pagesCount }, (_, index) => index + 1), [pagesCount]);
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
    <div className={classes.pagination}>
      {pages.map(page => (
        <div
          className={clsx(classes.page, page === Number(activePage) && classes.active)}
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

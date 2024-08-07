'use client';
import { FC, useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';

import { clsx } from 'clsx';

import classes from './Pagination.module.css';

import { useTheme } from '../ThemeContext';

interface IPaginationProps {
  itemsCount: number;
}

const Pagination: FC<IPaginationProps> = ({ itemsCount }) => {
  const pagesCount = Math.ceil(itemsCount / 10);
  const pages = useMemo(() => Array.from({ length: pagesCount }, (_, index) => index + 1), [pagesCount]);
  const router = useRouter();
  const { query } = router;
  const [activePage, setActivePage] = useState('1');
  const { theme } = useTheme();

  useEffect(() => {
    if (query.page) {
      setActivePage(query.page.toString());
    } else {
      setActivePage('1');
    }
  }, [query.page]);

  const handlePageClick = (page: number) => {
    const search = query.search || '';
    setActivePage(page.toString());
    const newQuery = { ...query, search, page: page.toString() };
    router.push({ pathname: router.pathname, query: newQuery });
  };

  return (
    <div className={clsx(classes.pagination, classes[theme.value])}>
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

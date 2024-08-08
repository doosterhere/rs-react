'use client';

import { FC, useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import clsx from 'clsx';

import classes from './Pagination.module.css';

interface IPaginationProps {
  itemsCount: number;
}

const Pagination: FC<IPaginationProps> = ({ itemsCount }) => {
  const pagesCount = Math.ceil(itemsCount / 10);
  const pages = useMemo(() => Array.from({ length: pagesCount }, (_, index) => index + 1), [pagesCount]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const q_page = searchParams.get('page') || '1';
  const q_search = searchParams.get('search') || '';
  const pathname = usePathname();
  const [activePage, setActivePage] = useState('1');

  useEffect(() => {
    if (q_page) {
      setActivePage(q_page.toString());
    } else {
      setActivePage('1');
    }
  }, [q_page]);

  const handlePageClick = (page: number) => {
    const search = q_search || '';
    setActivePage(page.toString());
    router.push(`${pathname}?search=${search}&page=${page}`);
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

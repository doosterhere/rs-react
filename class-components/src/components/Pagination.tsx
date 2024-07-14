import { FC, Dispatch, SetStateAction } from 'react';

interface IPaginationProps {
  pageCount: number;
  setPage: Dispatch<SetStateAction<string>>;
  activePage: string;
}

const Pagination: FC<IPaginationProps> = ({
  pageCount,
  setPage,
  activePage,
}) => {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <div className="pagination-arrow">
        <span>&#10094;</span>
      </div>
      {pages.map(page => (
        <div
          className={
            page === Number(activePage)
              ? 'pagination-page active'
              : 'pagination-page'
          }
          key={page}
          onClick={() => setPage(page.toString())}
        >
          {page}
        </div>
      ))}
      <div className="pagination-arrow">
        <span>&#10095;</span>
      </div>
    </div>
  );
};

export default Pagination;

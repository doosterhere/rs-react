import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

interface IPaginationProps {
  pageCount: number;
}

const Pagination: FC<IPaginationProps> = ({ pageCount }) => {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = searchParams.get('page');

  const handlePageClick = (page: number) => {
    setSearchParams({
      search: searchParams.get('search') || '',
      page: page.toString(),
    });
  };

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
          onClick={() => handlePageClick(page)}
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

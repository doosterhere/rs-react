import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
  SearchBar,
  List,
  Loader,
  ErrorBoundary,
  ButtonErrorTest,
  Fallback,
  Modal,
  Pagination,
} from '../components';
import { DefaultResponseType } from '../types';

const MainPage = () => {
  const [searchResults, setSearchResults] = useState<DefaultResponseType>({
    results: [],
  } as DefaultResponseType);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [page, setPage] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    startSearch(searchQuery);
  }, [page]);

  const startSearch = async (query: string) => {
    try {
      setIsLoading(true);
      setSearchQuery(query);
      const response = await fetch(
        `https://swapi.dev/api/planets/?search=${query}&page=${page}`,
      );
      const data = await response.json();
      setSearchResults(data);
      setPageCount(Math.ceil(data.count / 10));
    } catch (error) {
      setSearchResults({} as DefaultResponseType);
      setModalContent('Error while fetching data. Try later.');
      setIsModalVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ErrorBoundary fallbackComponent={<Fallback />}>
      <div className="container">
        <SearchBar startSearch={startSearch} page={page} />
        {isLoading && <Loader />}
        {!isLoading && (
          <List itemsList={searchResults.results} isLoading={isLoading} />
        )}
        {!isLoading && pageCount > 1 && (
          <Pagination
            pageCount={pageCount}
            setPage={setPage}
            activePage={page}
          />
        )}
        <ButtonErrorTest />
        <Outlet />
        <Modal
          isVisible={isModalVisible}
          content={modalContent}
          hideModal={hideModal}
        />
      </div>
    </ErrorBoundary>
  );
};

export default MainPage;

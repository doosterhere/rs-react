import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import {
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
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ search: searchParams.get('search') || '', page: '1' });
  }, []);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    const page = searchParams.get('page') || '1';
    startSearch(query, page);
  }, [searchParams]);

  const startSearch = async (query: string, page: string) => {
    try {
      setIsLoading(true);
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
        {isLoading && <Loader />}
        {!isLoading && (
          <List itemsList={searchResults.results} isLoading={isLoading} />
        )}
        {!isLoading && pageCount > 1 && <Pagination pageCount={pageCount} />}
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

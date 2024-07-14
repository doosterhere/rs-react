import { useState } from 'react';
import {
  SearchBar,
  List,
  Loader,
  ErrorBoundary,
  ButtonErrorTest,
  Fallback,
  Modal,
} from '../components';
import { PlanetType } from '../types';

const MainPage = () => {
  const [searchResults, setSearchResults] = useState<PlanetType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const startSearch = async (query: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/planets/?search=${query}&page=1`,
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      setSearchResults([]);
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
        <SearchBar startSearch={startSearch} />
        {isLoading && <Loader />}
        {!isLoading && <List itemsList={searchResults} isLoading={isLoading} />}
        <ButtonErrorTest />
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

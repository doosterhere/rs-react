import { useEffect, useState } from 'react';

const useAutocomplete = (dataList: string[], id: string) => {
  const [value, setValue] = useState<string>('');
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<string[]>(dataList);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).id === `picker-input-${id}` ||
        (e.target as HTMLElement).id === `picker-list-${id}`
      ) {
        return;
      }

      setListVisible(false);
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [id]);

  useEffect(() => {
    setFilteredList(dataList.filter(country => country.toLowerCase().includes(value.toLowerCase())));

    if (value) {
      setListVisible(true);
    } else {
      setListVisible(false);
    }
  }, [value, dataList]);

  const handleListClick = (country: string) => {
    setValue(country);
    setListVisible(false);
    setSelectedCountry(country);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSelectedCountry('');
    setListVisible(true);
  };

  const handleFocus = () => {
    if (value) {
      setListVisible(true);
    }
  };

  return {
    value,
    listVisible,
    filteredList,
    selectedCountry,
    handleChange,
    handleListClick,
    handleFocus,
  };
};

export { useAutocomplete };

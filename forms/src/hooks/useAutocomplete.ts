import { useEffect, useState } from 'react';

const useAutocomplete = (dataList: string[]) => {
  const [value, setValue] = useState<string>('');
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<string[]>(dataList);
  const [selectedCountry, setSelectedCountry] = useState<string>('');

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

  const handleBlur = () => {
    //since the input's blur event fires earlier than list's click event, this is the only solution I've found
    setTimeout(() => setListVisible(false), 150);
  };

  return {
    value,
    listVisible,
    filteredList,
    selectedCountry,
    handleChange,
    handleListClick,
    handleFocus,
    handleBlur,
  };
};

export { useAutocomplete };

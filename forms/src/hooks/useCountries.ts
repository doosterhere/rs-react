import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { getCountriesList } from '@/api/countriesApi';
import { setCountriesData } from '@/store/reducers/countriesReducer';

const useCountries = () => {
  const countries = useAppSelector(state => state.countries.countries);
  const dispatcher = useAppDispatch();

  const onLoad = useCallback(async () => {
    const countries = await getCountriesList();
    dispatcher(setCountriesData(countries));
  }, [dispatcher]);

  useEffect(() => {
    if (!countries.length) {
      onLoad();
    }
  }, [onLoad, countries.length]);

  return countries;
};

export { useCountries };

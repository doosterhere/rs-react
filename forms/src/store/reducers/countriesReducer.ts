import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICountriesState {
  countries: string[];
}

const initialState: ICountriesState = {
  countries: [],
};

const countriesReducer = createSlice({
  name: 'countries',
  initialState,
  reducers: create => ({
    setCountriesData: create.reducer((state, action: PayloadAction<string[]>) => {
      state.countries = action.payload;
    }),
  }),
  selectors: {
    selectAllCountries: state => state.countries,
    selectFilteredCountries: (state, str: string) => {
      return state.countries.filter(country => country.includes(str));
    },
  },
});

export const { setCountriesData } = countriesReducer.actions;
export const { selectAllCountries, selectFilteredCountries } = countriesReducer.selectors;
export default countriesReducer.reducer;

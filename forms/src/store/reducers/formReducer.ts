import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormDataType } from '@/types/formData.type';

type FormData = Omit<FormDataType, 'picture'> & { picture: string };

interface IFormState {
  formData: FormData[];
}

const initialState: IFormState = {
  formData: [],
};

const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: create => ({
    setFormData: create.reducer((state, action: PayloadAction<FormData>) => {
      state.formData = [...state.formData, action.payload];
    }),
    clearFormData: create.reducer(state => {
      state.formData = [];
    }),
  }),
  selectors: {
    selectFormData: state => state.formData,
  },
});

export const { setFormData, clearFormData } = formReducer.actions;
export const { selectFormData } = formReducer.selectors;
export default formReducer.reducer;

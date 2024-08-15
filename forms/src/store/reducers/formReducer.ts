import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormDataType = {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  country: string;
  picture: string;
  agreed: boolean;
};
interface IFormState {
  formData: FormDataType;
}

const initialState: IFormState = {
  formData: {} as FormDataType,
};

const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: create => ({
    setFormData: create.reducer((state, action: PayloadAction<FormDataType>) => {
      state.formData = action.payload;
    }),
    clearFormData: create.reducer(state => {
      state.formData = {} as FormDataType;
    }),
  }),
  selectors: {
    selectFormData: state => state.formData,
  },
});

export const { setFormData, clearFormData } = formReducer.actions;
export const { selectFormData } = formReducer.selectors;
export default formReducer.reducer;

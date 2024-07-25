import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IItemsState {
  selectedItems: string[];
}

const initialState: IItemsState = {
  selectedItems: [],
};

export const itemsReducer = createSlice({
  name: 'items',
  initialState,
  reducers: create => ({
    addItem: create.reducer((state, action: PayloadAction<string>) => {
      if (state.selectedItems.indexOf(action.payload) === -1) {
        state.selectedItems.push(action.payload);
        state.selectedItems.sort((a, b) => Number(a) - Number(b));
      }
    }),
    removeItem: create.reducer((state, action: PayloadAction<string>) => {
      state.selectedItems.splice(state.selectedItems.indexOf(action.payload), 1);
    }),
    clearItems: create.reducer(state => {
      state.selectedItems = initialState.selectedItems;
    }),
  }),
  selectors: {
    selectItems: state => state.selectedItems,
    checkItem: (state, id: string) => state.selectedItems.includes(id),
  },
});

export const { addItem, removeItem, clearItems } = itemsReducer.actions;
export const { selectItems, checkItem } = itemsReducer.selectors;

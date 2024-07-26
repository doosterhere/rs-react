import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullPlanetInfo } from '../../types';

interface IItemsState {
  selectedItems: FullPlanetInfo[];
}

const initialState: IItemsState = {
  selectedItems: [],
};

export const itemsReducer = createSlice({
  name: 'items',
  initialState,
  reducers: create => ({
    addItem: create.reducer((state, action: PayloadAction<FullPlanetInfo>) => {
      if (state.selectedItems.indexOf(action.payload) === -1) {
        state.selectedItems.push(action.payload);
        state.selectedItems.sort((a, b) => a.name.localeCompare(b.name));
      }
    }),
    removeItem: create.reducer((state, action: PayloadAction<string>) => {
      state.selectedItems.splice(
        state.selectedItems.findIndex(item => item.id === action.payload),
        1,
      );
    }),
    clearItems: create.reducer(state => {
      state.selectedItems = initialState.selectedItems;
    }),
  }),
  selectors: {
    selectItems: state => state.selectedItems,
    checkItem: (state, id: string) => state.selectedItems.find(items => items.id === id)?.id,
    selectQuantity: state => state.selectedItems.length,
  },
});

export const { addItem, removeItem, clearItems } = itemsReducer.actions;
export const { selectItems, checkItem, selectQuantity } = itemsReducer.selectors;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullPlanetInfo, PlanetType } from '../../types';

interface IItemsState {
  selectedItems: FullPlanetInfo[];
  currentPageItems: PlanetType[];
}

const initialState: IItemsState = {
  selectedItems: [],
  currentPageItems: [],
};

const itemsReducer = createSlice({
  name: 'items',
  initialState,
  reducers: create => ({
    addSelectedItem: create.reducer((state, action: PayloadAction<FullPlanetInfo>) => {
      if (!state.selectedItems.find(item => item.id === action.payload.id)) {
        state.selectedItems.push(action.payload);
        state.selectedItems.sort((a, b) => a.name.localeCompare(b.name));
      }
    }),
    removeSelectedItem: create.reducer((state, action: PayloadAction<string>) => {
      state.selectedItems.splice(
        state.selectedItems.findIndex(item => item.id === action.payload),
        1,
      );
    }),
    clearSelectedItems: create.reducer(state => {
      state.selectedItems = initialState.selectedItems;
    }),
    setCurrentPageItems: create.reducer((state, action: PayloadAction<PlanetType[]>) => {
      state.currentPageItems = action.payload;
    }),
  }),
  selectors: {
    selectSelectedItems: state => state.selectedItems,
    checkIsItemSelected: (state, id: string) => Boolean(state.selectedItems.find(items => items.id === id)?.id),
    selectSelectedQuantity: state => state.selectedItems.length,
  },
});

export const { addSelectedItem, removeSelectedItem, clearSelectedItems, setCurrentPageItems } = itemsReducer.actions;
export const { selectSelectedItems, checkIsItemSelected, selectSelectedQuantity } = itemsReducer.selectors;
export default itemsReducer.reducer;

import { mockedPlanet } from './mocks/mockData';
import { FullPlanetInfo, PlanetType } from '../types';
import itemsReducer, {
  selectSelectedItems,
  selectSelectedQuantity,
  checkIsItemSelected,
  addSelectedItem,
  removeSelectedItem,
  clearSelectedItems,
  setCurrentPageItems,
} from '../store/reducers/itemsReducer';

const items: FullPlanetInfo[] = [{ ...mockedPlanet, id: '1' }];
const state = {
  items: {
    selectedItems: items,
    currentPageItems: [] as PlanetType[],
  },
};

describe('itemReducer', () => {
  // *** selectors block *** //
  it('should select selected items from the state object', () => {
    const result = selectSelectedItems(state);

    expect(result).toEqual(items);
  });

  it('should select selected quantity from the state object', () => {
    const result = selectSelectedQuantity(state);

    expect(result).toBe(items.length);
  });

  it('should check wheter an item is selected or not', () => {
    const result_1 = checkIsItemSelected(state, '1');
    const result_2 = checkIsItemSelected(state, '2');

    expect(result_1).toBeTruthy();
    expect(result_2).toBeFalsy();
  });

  // *** actions block *** //
  it('should return initial state when passed an empty action', () => {
    const result = itemsReducer(undefined, { type: '' });

    expect(result).toEqual({ selectedItems: [], currentPageItems: [] });
  });

  it('should add the item with "addSelectedItem" action', () => {
    const action = { type: addSelectedItem.type, payload: { ...mockedPlanet, id: '1' } };
    const result = itemsReducer({ selectedItems: [], currentPageItems: [] }, action);

    expect(result.selectedItems).toHaveLength(1);
    expect(result.selectedItems[0]).toEqual({ ...mockedPlanet, id: '1' });
  });

  it('should not to add the item with "addSelectedItem" action if the item is already selected', () => {
    const action = { type: addSelectedItem.type, payload: { ...mockedPlanet, id: '1' } };
    const result = itemsReducer({ selectedItems: [{ ...mockedPlanet, id: '1' }], currentPageItems: [] }, action);

    expect(result.selectedItems).toHaveLength(1);
  });

  it('should remove the item from the selected items with "removeSelectedItem" action', () => {
    const action = { type: removeSelectedItem.type, payload: '1' };
    const result = itemsReducer({ selectedItems: items, currentPageItems: [] }, action);

    expect(result.selectedItems).toHaveLength(0);
  });

  it('should clear the selected items with "clearSelectedItems" action', () => {
    const action = { type: clearSelectedItems.type };
    const result = itemsReducer({ selectedItems: items, currentPageItems: [] }, action);

    expect(result.selectedItems).toHaveLength(0);
  });

  it('should set items in the current page items array with "setCurrentPageItems" action', () => {
    const action = { type: setCurrentPageItems.type, payload: items };
    const result = itemsReducer({ selectedItems: [], currentPageItems: [] }, action);

    expect(result.currentPageItems).toEqual(items);
  });
});

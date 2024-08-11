import { act, renderHook } from '@testing-library/react';

import { useLocalStorage } from '../hooks/useLocalStorage';

describe('useLocalStorage', () => {
  it('should return an object with correct properties', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'test-value'));

    expect(result.current).toHaveProperty('storedValue');
    expect(typeof result.current.storedValue).toBe('string');

    expect(result.current).toHaveProperty('setStoredValue');
    expect(typeof result.current.setStoredValue).toBe('function');
  });

  it('should get data from localStorage and set data before unmount', () => {
    localStorage.setItem('key', JSON.stringify('old_value'));

    const { result, unmount } = renderHook(() => useLocalStorage('key', 'old_value'));

    expect(result.current.storedValue).toBe('old_value');

    act(() => {
      result.current.setStoredValue('new_value');
    });

    expect(result.current.storedValue).toBe('new_value');

    unmount();

    expect(JSON.parse(localStorage.getItem('key') || '')).toBe('new_value');

    localStorage.removeItem('key');

    expect(localStorage.getItem('key')).toBeNull();
  });
});

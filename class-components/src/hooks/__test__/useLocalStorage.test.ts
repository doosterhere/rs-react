import { act, renderHook } from '@testing-library/react';

import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  it('should return an object with correct properties', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'test-value'));

    expect(result.current).toHaveProperty('value');
    expect(typeof result.current.value).toBe('string');

    expect(result.current).toHaveProperty('restored');
    expect(typeof result.current.restored).toBe('boolean');

    expect(result.current).toHaveProperty('setValue');
    expect(typeof result.current.setValue).toBe('function');
  });

  it('should get data from localStorage and set data before unmount', () => {
    localStorage.setItem('key', 'old_value');

    const { result, unmount } = renderHook(() => useLocalStorage('key'));

    expect(result.current.value).toBe('old_value');

    act(() => {
      result.current.setValue('new_value');
    });

    expect(result.current.value).toBe('new_value');

    unmount();

    expect(localStorage.getItem('key')).toBe('new_value');

    localStorage.removeItem('key');

    expect(localStorage.getItem('key')).toBeNull();
  });
});

import { screen, fireEvent } from '@testing-library/react';

import { renderWithProvider } from '../utils';
import { Pagination } from '../components';

jest.mock('next/router', () => {
  const router = {
    push: jest.fn(),
    query: {},
    pathname: '/',
  };
  return {
    useRouter: jest.fn().mockReturnValue(router),
  };
});

describe('Pagination', () => {
  it('should renders correctly with two buttons and set proper classNames', () => {
    renderWithProvider(<Pagination itemsCount={15} />);

    const buttons = screen.queryAllByRole('button');

    expect(buttons).toHaveLength(2);

    const button_1 = buttons[0];
    const button_2 = buttons[1];

    expect(button_1).toHaveClass('page active');
    expect(button_2).not.toHaveClass('active');

    fireEvent.click(button_2);

    expect(button_1).not.toHaveClass('active');
    expect(button_2).toHaveClass('page active');
  });
});

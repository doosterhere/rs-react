import { screen, fireEvent } from '@testing-library/react';

import { renderWithProvider } from '../utils';
import { Pagination } from '../components/Pagination';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => ({ get: () => '' }),
}));

describe('Pagination', () => {
  it('should renders correctly with correct numbers of buttons', () => {
    const itemsCount = 34;
    const buttonsCount = Math.ceil(itemsCount / 10);

    const { container } = renderWithProvider(<Pagination itemsCount={itemsCount} />);

    expect(container).toMatchSnapshot();

    const buttons = screen.queryAllByRole('button');

    expect(buttons).toHaveLength(Math.ceil(buttonsCount));
  });

  it('should correct sets "active" class name for the buttons', () => {
    renderWithProvider(<Pagination itemsCount={15} />);

    const buttons = screen.queryAllByRole('button');

    const button_1 = buttons[0];
    const button_2 = buttons[1];

    expect(button_1).toHaveClass('page active');
    expect(button_2).not.toHaveClass('active');

    fireEvent.click(button_2);

    expect(button_1).not.toHaveClass('active');
    expect(button_2).toHaveClass('page active');
  });
});

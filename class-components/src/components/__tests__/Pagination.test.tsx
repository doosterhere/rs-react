import { screen, fireEvent } from '@testing-library/react';

import { renderWithRouter } from '../../utils';

import Pagination from '../Pagination';

describe('Pagination', () => {
  it('should renders correctly with two buttons and set proper classNames', () => {
    renderWithRouter(<Pagination itemsCount={15} />);

    const buttons = screen.queryAllByRole('button');

    expect(buttons).toHaveLength(2);

    const button_1 = buttons[0];
    const button_2 = buttons[1];

    expect(button_1).toHaveClass('pagination-page active');
    expect(button_2).not.toHaveClass('active');

    fireEvent.click(button_2);

    expect(button_1).not.toHaveClass('active');
    expect(button_2).toHaveClass('pagination-page active');
  });
});

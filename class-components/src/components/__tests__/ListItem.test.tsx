import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../utils';

import ListItem from '../ListItem';

describe('ListItem', () => {
  it('should renders correctly', () => {
    const props = {
      name: 'test',
      id: '1',
    };

    renderWithRouter(<ListItem {...props} />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toMatchSnapshot();
  });
});

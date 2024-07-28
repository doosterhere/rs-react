import 'whatwg-fetch';
import { screen } from '@testing-library/react';

import { renderWithRouter } from '../utils';
import { ListItem } from '../components';
import { FullPlanetInfo } from '../types';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));

describe('ListItem', () => {
  it('should render with correct href when id matches', () => {
    const props = {
      id: '1',
      name: 'test',
    } as FullPlanetInfo;

    renderWithRouter(<ListItem {...props} />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('should render with correct href when id does not match', () => {
    const props = {
      name: 'test',
      id: '2',
    } as FullPlanetInfo;

    renderWithRouter(<ListItem {...props} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/detail/2');
  });
});

import { screen } from '@testing-library/react';

import { renderWithProvider } from '../utils';
import { List } from '../components';
import { mockedPlanets } from './testSetup/mockData';

describe('List', () => {
  it('should renders correctly with data', () => {
    renderWithProvider(<List itemsList={mockedPlanets.results} />);

    expect(screen.getByText(/^Mocked\sPlanet$/i)).toBeInTheDocument();

    expect(screen.getByText(/^Mocked\sPlanet\s2$/i)).toBeInTheDocument();
  });

  it('should renders correctly without data', () => {
    renderWithProvider(<List itemsList={[]} />);

    expect(screen.getByTestId('list').childNodes).toHaveLength(0);
  });
});

import { screen } from '@testing-library/react';

import { renderWithProvider } from '../utils';
import { List } from '../components/List';
import { mockedPlanets } from './testSetup/mockData';
import { PlanetType } from '../types';

jest.mock('../components/ListItem', () => ({
  ListItem: (item: PlanetType) => <div>{item.name}</div>,
}));

describe('List', () => {
  it('should renders correctly with data', () => {
    const { container } = renderWithProvider(<List itemsList={mockedPlanets.results} />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText(/^Mocked\sPlanet$/i)).toBeInTheDocument();

    expect(screen.getByText(/^Mocked\sPlanet\s2$/i)).toBeInTheDocument();
  });

  it('should renders correctly without data', () => {
    const { container } = renderWithProvider(<List itemsList={[]} />);

    expect(container).toMatchSnapshot();

    expect(screen.getByTestId('list').childNodes).toHaveLength(0);
  });
});

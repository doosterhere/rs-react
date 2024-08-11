import { render, screen } from '@testing-library/react';

import { MainContent } from '@/components/MainContent';
import { DefaultResponseType, PlanetType } from '@/types';
import { mockedPlanets, planetsNotFound } from './testSetup/mockData';

jest.mock('../components/SearchBar', () => ({ SearchBar: () => <div data-testid="SearchBar">SearchBar</div> }));
jest.mock('../components/List', () => ({
  List: ({ itemsList }: { itemsList: PlanetType[] }) => (
    <ul data-testid="List">
      {itemsList.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  ),
}));
jest.mock('../components/Pagination', () => ({ Pagination: () => <div data-testid="Pagination">Pagination</div> }));
jest.mock('../components/Flyout', () => ({ Flyout: () => <div data-testid="Flyout">Flyout</div> }));

describe('MainContent', () => {
  const mockData: DefaultResponseType<PlanetType> = {
    ...mockedPlanets,
    count: 20,
  };

  it('should renders correctly when data is provided', () => {
    render(<MainContent data={mockData} />);

    expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
    expect(screen.getByTestId('List')).toBeInTheDocument();
    expect(screen.getByTestId('Pagination')).toBeInTheDocument();
    expect(screen.getByTestId('Flyout')).toBeInTheDocument();
  });

  it('should renders "No results" when data.results is empty', () => {
    const emptyData: DefaultResponseType<PlanetType> = {
      ...planetsNotFound,
    };

    render(<MainContent data={emptyData} />);

    expect(screen.getByText('No results')).toBeInTheDocument();
  });
});

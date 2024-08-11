import { screen } from '@testing-library/react';

import { renderWithProvider } from '@/utils';
import { ListItemDetailed } from '@/components/ListItemDetailed';
import { PlanetType } from '@/types';
import { mockedPlanet } from './testSetup/mockData';

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({ get: () => '' }),
}));

describe('ListItemDetailed', () => {
  it('should renders correct data', async () => {
    const { container } = renderWithProvider(<ListItemDetailed data={mockedPlanet} />);

    expect(container).toMatchSnapshot();

    expect(screen.getByText(/Mocked Planet/i)).toBeInTheDocument();
  });

  it('should render correctly with no data received', async () => {
    const { container } = renderWithProvider(<ListItemDetailed data={{} as PlanetType} />);

    expect(container).toMatchSnapshot();

    expect(screen.queryByText(/Mocked Planet/i)).not.toBeInTheDocument();
  });
});

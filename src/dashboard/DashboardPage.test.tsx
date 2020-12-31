import { screen } from '@testing-library/react';

import DashboardPage from './DashboardPage';
import { renderWithRouter } from '../core/utils/testUtils';

describe('Dashboard page', () => {
  it('should show the text dashboard', async () => {
    renderWithRouter(<DashboardPage />, { route: '/' });

    const elem = await screen.getByRole('heading', { name: /^dashboard/i });
    expect(elem).toBeInTheDocument();
  });
});

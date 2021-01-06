import { screen } from '@testing-library/react';

import DashboardPage from './DashboardPage';
import { testUtils } from '../core/utils';

describe('Dashboard page', () => {
  it('should show the text dashboard', async () => {
    testUtils.renderWithRouter(<DashboardPage />, { route: '/' });

    const elem = await screen.getByRole('heading', { name: /^Dashboard/ });
    expect(elem).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';

import ProfilePage from './ProfilePage';
import { testUtils } from '../core/utils';

describe('Profile page', () => {
  it('should show the text profile', async () => {
    testUtils.renderWithRouter(<ProfilePage />, { route: '/' });

    const elem = await screen.getByRole('heading', { name: /^Profile/ });
    expect(elem).toBeInTheDocument();
  });
});

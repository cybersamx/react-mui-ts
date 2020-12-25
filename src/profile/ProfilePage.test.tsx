import React from 'react';
import { screen } from '@testing-library/react';

import ProfilePage from './ProfilePage';
import { renderWithRouter } from '../core/utils/testUtils';

describe('Profile page', () => {
  it('should show the text profile', async () => {
    renderWithRouter(<ProfilePage />, { route: '/' });

    const elem = await screen.getByRole('heading', { name: /^profile/i });
    expect(elem).toBeInTheDocument();
  });
});

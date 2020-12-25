import React from 'react';
import { screen } from '@testing-library/react';

import HomePage from './HomePage';
import { renderWithRouter } from '../core/utils/testUtils';

describe('Home page', () => {
  it('should show the text home', async () => {
    renderWithRouter(<HomePage />, { route: '/' });

    const elem = await screen.getByRole('heading', { name: /^home/i });
    expect(elem).toBeInTheDocument();
  });
});

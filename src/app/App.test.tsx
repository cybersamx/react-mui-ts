import React from 'react';
import { screen } from '@testing-library/react';

import App from './App';
import { renderWithRouter } from '../core/utils/testUtils';

// --- Test cases ---

describe('Access to the dashboard page', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { route: '/dashboard' });
  });

  it('should redirect to the sign-in page if the user has not signed in', () => {
    expect(window.location.pathname).toBe('/signin');
  });
});

describe('Access to the profile page', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { route: '/profile' });
  });

  it('should redirect to the sign-in page if the user has not signed in', () => {
    expect(window.location.pathname).toBe('/signin');
  });
});

describe('Access to an non-existing page', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { route: '/non-existing' });
  });

  it('should redirect to the not-found page', async () => {
    expect(window.location.pathname).toBe('/not-found');
    const elem = await screen.findByText(/^not found/i);
    expect(elem).toBeInTheDocument();
  });
});

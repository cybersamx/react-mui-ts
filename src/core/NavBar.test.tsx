import { screen } from '@testing-library/react';

import NavBar from './NavBar';
import { renderWithRouter } from './utils/testUtils';

describe('NavBar', () => {
  it('should show 3 links', async () => {
    renderWithRouter(<NavBar />, { route: '/' });

    let items = screen.getAllByRole('link');
    expect(items).toHaveLength(3);

    let elem = screen.getByRole('link', { name: /home/i });
    expect(elem).toHaveTextContent('Home');

    elem = screen.getByRole('link', { name: /dashboard/i });
    expect(elem).toHaveTextContent('Dashboard');

    elem = screen.getByRole('link', { name: /profile/i });
    expect(elem).toHaveTextContent('Profile');

    elem = screen.getByRole('button', { name: /sign-in/i });
    expect(elem).toHaveTextContent('Sign-In');
  });
});

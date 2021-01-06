import { screen } from '@testing-library/react';

import HomePage from './HomePage';
import { testUtils } from '../core/utils';

describe('Home page', () => {
  it('should show the text home', async () => {
    testUtils.renderWithRouter(<HomePage />, { route: '/' });

    const elem = await screen.getByRole('heading', { name: /^React-Material-TypeScript/ });
    expect(elem).toBeInTheDocument();
  });
});

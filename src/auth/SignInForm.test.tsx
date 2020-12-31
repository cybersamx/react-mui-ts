import { screen } from '@testing-library/react';

import { renderWithRouter } from '../core/utils/testUtils';
import SignInForm from './SignInForm';

describe('SignInForm', () => {
  const onSubmit = jest.fn();

  it('should have the text boxes', () => {
    renderWithRouter(<SignInForm onSubmit={onSubmit} />, { route: '/' });

    expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});

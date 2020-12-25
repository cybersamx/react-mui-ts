import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import { renderWithRouter } from '../core/utils/testUtils';
import SignInForm from './SignInForm';

describe('SignInForm', () => {
  const onSubmit = jest.fn();

  it('should have the text boxes', () => {
    renderWithRouter(<SignInForm onSubmit={onSubmit} />, { route: '/' });

    expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('should submit', async () => {
    renderWithRouter(<SignInForm onSubmit={onSubmit} />, { route: '/' });

    fireEvent.input(screen.getByRole('textbox', { name: /username/i }), {
      target: { value: 'sam' },
    });
    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'password' },
    });

    // fireEvent.submit(screen.getByRole('button', { name: /sign-in/i }));
    fireEvent.submit(screen.getByTestId('form'));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});

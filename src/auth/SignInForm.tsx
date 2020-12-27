import { FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useAuth } from '../core/auth/AuthContext';

export interface SignInFormProps {
  onSubmit?: (e: FormEvent) => void;
}

function previousPath(search: string) {
  const match = search.match(/redirect=(.*)/);
  const redirect = match?.[1] || '';
  return decodeURIComponent(redirect) || '/dashboard';
}

function SignInForm({ onSubmit }: SignInFormProps) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  // If no form submission handler is passed, we use handleSignIn.
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    if (auth.isSignedIn()) {
      auth.signOut();

      navigate({ pathname: '/' });
    } else {
      try {
        await auth.signIn(username, password);
        const pathname = previousPath(search);
        setError('');
        navigate({ pathname: pathname });
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <form onSubmit={onSubmit || handleSignIn} data-testid="form">
      {auth.isSignedIn() || (
        <label>
          Username: <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </label>
      )}
      {auth.isSignedIn() || (
        <label>
          Password: <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
      )}
      <button type="submit">{auth.isSignedIn() ? 'Sign-Out' : 'Sign-In'}</button>
      <p>{error}</p>
    </form>
  );
}

export default SignInForm;

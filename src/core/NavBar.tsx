import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from './auth/useAuth';

function AuthButton() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleClick = () => {
    if (auth.isSignedIn()) {
      auth.signOut();

      navigate({ pathname: '/' });
    } else {
      navigate({ pathname: '/signin' });
    }
  };

  return (
    <p>
      <button onClick={handleClick}>{auth.isSignedIn() ? 'Sign-Out' : 'Sign-In'}</button>
    </p>
  );
}

function NavBar() {
  const location = useLocation();

  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      {location.pathname === '/signin' || <AuthButton />}
    </Fragment>
  );
}

export default NavBar;

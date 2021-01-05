import { Button, Link, makeStyles } from '@material-ui/core';
import { DetailedHTMLProps, Fragment, InputHTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from './auth/AuthProvider';

const useStyles = makeStyles((theme) => ({
  nav: {
    margin: theme.spacing(1, 1.5),
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
  },
}));

interface AuthLinkProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
  children?: ReactNode;
  pathname: string;
}

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
    <Button variant="outlined" onClick={handleClick}>
      {auth.isSignedIn() ? 'Sign-Out' : 'Sign-In'}
    </Button>
  );
}

function AuthLink({ children, className, pathname }: AuthLinkProps) {
  return (
    <Link variant="body1" href={pathname} className={className}>
      {children}
    </Link>
  );
}

function NavBar() {
  const classes = useStyles();

  return (
    <Fragment>
      <Link variant="body1" href="/" className={classes.nav}>
        Home
      </Link>
      <AuthLink pathname="/dashboard" className={classes.nav}>
        Dashboard
      </AuthLink>
      <AuthLink pathname="/profile" className={classes.nav}>
        Profile
      </AuthLink>
      <AuthButton />
    </Fragment>
  );
}

export default NavBar;

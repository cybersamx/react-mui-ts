import { makeStyles, Typography } from '@material-ui/core';
import { Fragment } from 'react';

import { NavBar } from '../core/bars';
import SignInForm from './SignInForm';

function SignInPage() {
  return (
    <Fragment>
      <NavBar />
      <SignInForm />
    </Fragment>
  );
}

export default SignInPage;

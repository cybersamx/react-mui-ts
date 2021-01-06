import { makeStyles, Typography } from '@material-ui/core';
import { Fragment } from 'react';

import { NavBar } from '../core/bars';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <Fragment>
      <NavBar />
      <SignUpForm />
    </Fragment>
  );
}

export default SignUpPage;

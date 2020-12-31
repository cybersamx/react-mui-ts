import { Fragment } from 'react';

import NavBar from '../core/NavBar';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <Fragment>
      <NavBar />
      <h2>Sign-Up</h2>
      <SignUpForm />
    </Fragment>
  );
}

export default SignUpPage;

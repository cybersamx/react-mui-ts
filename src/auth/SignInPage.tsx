import { Fragment } from 'react';

import NavBar from '../core/NavBar';
import SignInForm from './SignInForm';

function SignInPage() {
  return (
    <Fragment>
      <NavBar />
      <h2>Auth</h2>
      <SignInForm />
    </Fragment>
  );
}

export default SignInPage;

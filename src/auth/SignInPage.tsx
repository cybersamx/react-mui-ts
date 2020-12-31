import { Fragment } from 'react';

import NavBar from '../core/NavBar';
import SignInForm from './SignInForm';

function SignInPage() {
  return (
    <Fragment>
      <NavBar />
      <h2>Auth</h2>
      <SignInForm />
      <p>
        or <a href="/signup">Sign-up</a>
      </p>
    </Fragment>
  );
}

export default SignInPage;

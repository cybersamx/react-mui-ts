import { NavBar } from '../core/bars';
import { Page } from '../layouts';
import SignInForm from './SignInForm';

function SignInPage() {
  return (
    <Page title="Sign-In">
      <NavBar />
      <SignInForm />
    </Page>
  );
}

export default SignInPage;

import { NavBar } from '../core/bars';
import { Page } from '../layouts';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <Page title="Sign-Up">
      <NavBar />
      <SignUpForm />
    </Page>
  );
}

export default SignUpPage;

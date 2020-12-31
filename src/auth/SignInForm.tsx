import { FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useAuth } from '../core/auth/AuthProvider';
import { FormFields, FormProvider } from '../core/form/FormProvider';
import InputField from '../core/form/InputField';

interface SignInFormProps {
  onSubmit?: (e: FormEvent) => void;
}

const initialFields = {
  username: '',
  password: '',
};

function previousPath(search: string) {
  const match = search.match(/redirect=(.*)/);
  const redirect = match?.[1] || '';
  return decodeURIComponent(redirect) || '/dashboard';
}

function SignInForm({ onSubmit }: SignInFormProps) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  const [fields, setFields] = useState<FormFields<string>>(initialFields);
  const [isFormValid, setFormValid] = useState<boolean>(true);
  const [, setErrMsgs] = useState<FormFields<string>>({});
  const [formError, setFormError] = useState<string>('');

  // If no form submission handler is passed, we use handleSignIn.
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (auth.isSignedIn()) {
      auth.signOut();

      navigate({ pathname: '/' });
    } else {
      try {
        await auth.signIn(fields['username'], fields['password']);
        const pathname = previousPath(search);
        setFormError(''); // Reset error.
        navigate({ pathname: pathname });
      } catch (err) {
        setFormError(err.message);
      }
    }
  };

  const handleValid = (isValid: boolean, errMsgs: FormFields<string>) => {
    setFormValid(isValid);
    setErrMsgs(errMsgs);
  };

  return (
    <FormProvider initialFields={fields} onChange={setFields} onValid={handleValid}>
      <InputField name="username" />
      <InputField name="password" type="password" />
      <button onClick={onSubmit || handleSubmit} disabled={!isFormValid}>
        {auth.isSignedIn() ? 'Sign-Out' : 'Sign-In'}
      </button>
      <p>{formError}</p>
    </FormProvider>
  );
}

export type { SignInFormProps };
export default SignInForm;

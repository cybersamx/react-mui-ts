import { Avatar, Button, Checkbox, Container, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { FormEvent, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useAuth } from '../core/auth';
import { FormFields, FormProvider, InputField } from '../core/form';

interface SignInFormProps {
  onSubmit?: (e: FormEvent) => void;
}

const initialFields = {
  username: '',
  password: '',
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  signup: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

function previousPath(search: string) {
  const match = search.match(/redirect=(.*)/);
  const redirect = match?.[1] || '';
  return decodeURIComponent(redirect) || '/dashboard';
}

function SignInForm({ onSubmit }: SignInFormProps) {
  const { search } = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();
  const classes = useStyles();

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
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <InputField name="username" />
          <InputField name="password" type="password" />
          <FormControlLabel control={<Checkbox value="remember" />} label="Remember me" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSubmit || handleSubmit}
            disabled={!isFormValid}
          >
            {auth.isSignedIn() ? 'Sign Out' : 'Sign In'}
          </Button>
          <p>{formError}</p>
        </div>
        <Typography variant="body1" className={classes.signup}>
          or <a href="/signup">sign up</a> for a new account.
        </Typography>
      </Container>
    </FormProvider>
  );
}

export type { SignInFormProps };
export default SignInForm;

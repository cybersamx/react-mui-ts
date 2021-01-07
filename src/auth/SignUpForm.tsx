import { Avatar, Button, Container, makeStyles, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { FormEvent, useState } from 'react';

import { FormFields, FormProvider, InputField } from '../core/form';

interface SignUpFormProps {
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
  signin: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

function validateMinChar(n: number): (val: any) => string {
  return (val) => (val && val.length >= n ? '' : `Must be at least ${n} characters long`);
}

function SignUpForm({ onSubmit }: SignUpFormProps) {
  const classes = useStyles();

  const [fields, setFields] = useState<FormFields<string>>(initialFields);
  const [isFormValid, setFormValid] = useState<boolean>(true);
  const [, setErrMsgs] = useState<FormFields<string>>({});

  const handleSubmit = () => {
    alert(`Submit value: ${JSON.stringify(fields, null, 2)}`);
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
            <AccountCircle />
          </Avatar>
          <Typography component="main" variant="h5">
            Sign up for a new account
          </Typography>
          <InputField name="username" onValidate={validateMinChar(3)} />
          <InputField name="password" type="password" onValidate={validateMinChar(8)} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSubmit || handleSubmit}
            disabled={!isFormValid}
          >
            Sign Up
          </Button>
        </div>
        <Typography variant="body1" className={classes.signin}>
          or <a href="/signin">sign in</a> if you already have an account.
        </Typography>
      </Container>
    </FormProvider>
  );
}

export type { SignUpFormProps };
export default SignUpForm;

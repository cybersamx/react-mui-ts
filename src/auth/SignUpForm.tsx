import { FormEvent, useState } from 'react';

import { FormFields, FormProvider } from '../core/form/FormProvider';
import InputField from '../core/form/InputField';

interface SignUpFormProps {
  onSubmit?: (e: FormEvent) => void;
}

const initialFields = {
  username: '',
  password: '',
};

function validateMinChar(n: number): (val: any) => string {
  return (val) => (val && val.length >= n ? '' : `Must be at least ${n} characters long`);
}

function SignUpForm({ onSubmit }: SignUpFormProps) {
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
      <InputField name="username" onValidate={validateMinChar(3)} />
      <InputField name="password" type="password" onValidate={validateMinChar(8)} />
      <button onClick={onSubmit || handleSubmit} disabled={!isFormValid}>
        Sign Up
      </button>
    </FormProvider>
  );
}

export type { SignUpFormProps };
export default SignUpForm;

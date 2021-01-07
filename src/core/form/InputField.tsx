// CREDIT: The React Cookbook by David Griffiths, O'Reilly.

import { BaseTextFieldProps, TextField, Typography } from '@material-ui/core';
import { ChangeEvent, Fragment, useEffect, useState } from 'react';

import { useForm } from './FormProvider';

interface InputFieldProps extends BaseTextFieldProps {
  onValidate?: (val: any) => string;
  name: string;
  label?: string;
}

// If the label property isn't set, we will use the value in the name property to set the label
// value. It does so by implicitly changing name value, which is in camel case to space-seprated text.
function splitCamelCase(s: string) {
  // prettier-ignore
  return s
    .replace(/([a-z0-9])([A-Z0-9])/g, '$1 $2')
    .replace(/^([a-z])/, (x) => x.toUpperCase());
}

function InputField({ onValidate, name, label, ...rest }: InputFieldProps) {
  const form = useForm();

  const [error, setError] = useState<string>('');

  let value = form.getField(name);

  useEffect(() => {
    if (onValidate) {
      setError(onValidate(value));
    }
  }, [onValidate, value]);

  const setInvalid = form.setFieldInvalid;

  useEffect(() => {
    setInvalid(name, error);
  }, [setInvalid, name, error]);

  return (
    <Fragment>
      <TextField
        variant="outlined"
        margin="normal"
        id={name}
        required
        label={label || splitCamelCase(name)}
        name={name}
        autoComplete={name}
        value={value || ''}
        onBlur={() => form.setFieldDirty(name)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          form.setFieldDirty(name);
          form.setField(name, e.target.value);
        }}
        {...rest}
      />
      {<Typography variant="body2">{form.isFieldDirty(name) && error ? error : ' '}</Typography>}
    </Fragment>
  );
}

export type { InputFieldProps };
export { InputField, splitCamelCase };

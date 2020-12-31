import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from 'react';

import { useForm } from './FormProvider';

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
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
    <div>
      <label htmlFor={name}>{label || splitCamelCase(name)}:</label>
      <input
        id={name}
        onBlur={() => form.setFieldDirty(name)}
        value={value || ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          form.setFieldDirty(name);
          form.setField(name, e.target.value);
        }}
        {...rest}
      />
      {<div>{form.isFieldDirty(name) && error ? error : ' '}</div>}
    </div>
  );
}

export type { InputFieldProps };
export { splitCamelCase };
export default InputField;

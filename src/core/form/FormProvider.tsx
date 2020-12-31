import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

interface FormFields<T> {
  [key: string]: T;
}

interface Form {
  setField: (name: string, value: string) => void;
  getField: (name: string) => string;
  setFieldDirty: (name: string) => void;
  isFieldDirty: (name: string) => boolean;
  setFieldInvalid: (name: string, error: string) => void;
}

interface FormProviderProps {
  children?: ReactNode;
  initialFields?: FormFields<string>;
  onChange?: (fields: FormFields<string>) => void;
  onValid?: (isValid: boolean, errors: FormFields<string>) => void;
}

const defaultForm = {
  setField: () => {},
  getField: () => '',
  setFieldDirty: () => {},
  isFieldDirty: () => false,
  setFieldInvalid: () => {},
};

const FormContext = createContext<Form>(defaultForm);
const useForm = () => useContext(FormContext);

function updateWith<T>(fields: FormFields<T>, name: string, val: T) {
  const newFields = { ...fields };
  newFields[name] = val;
  return newFields;
}

function FormProvider({ children, initialFields = {}, onChange, onValid }: FormProviderProps) {
  const [fields, setFields] = useState<FormFields<string>>(initialFields);
  const [dirtyFields, setDirtyFields] = useState<FormFields<boolean>>({});
  const [invalidFields, setInvalidFields] = useState<FormFields<string>>({});

  useEffect(() => {
    setFields(fields || {});
  }, [fields]);

  useEffect(() => {
    if (onChange) {
      onChange(fields);
    }
  }, [onChange, fields]);

  useEffect(() => {
    if (onValid) {
      onValid(
        Object.keys(invalidFields).every((name) => !invalidFields[name]),
        invalidFields
      );
    }
  }, [onValid, invalidFields]);

  let setField = useCallback((name, val) => setFields((ff) => updateWith(ff, name, val)), [setFields]);
  let getField = useCallback((name) => fields[name], [fields]);
  let setFieldDirty = useCallback((name) => setDirtyFields((ff) => updateWith(ff, name, true)), [setDirtyFields]);
  let isFieldDirty = useCallback((name) => Object.keys(dirtyFields).includes(name), [dirtyFields]);
  let setFieldInvalid = useCallback(
    (name, errMsg) => {
      setInvalidFields((ff) => updateWith(ff, name, errMsg ? errMsg : ''));
    },
    [setInvalidFields]
  );
  let form = {
    setField,
    getField,
    setFieldDirty,
    isFieldDirty,
    setFieldInvalid,
  };

  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
}

export type { FormFields, Form, FormProviderProps };
export { FormContext, FormProvider, useForm };

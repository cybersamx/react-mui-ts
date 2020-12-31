import { fireEvent, render, screen } from '@testing-library/react';
import InputField, { splitCamelCase } from './InputField';
import { FormProvider } from './FormProvider';

describe('splitCamelCase', () => {
  it('should split camel case inputs', () => {
    expect(splitCamelCase('localhost')).toBe('Localhost');
    expect(splitCamelCase('webServer')).toBe('Web Server');
    expect(splitCamelCase('prodWebServer')).toBe('Prod Web Server');
    expect(splitCamelCase('prodApiServer')).toBe('Prod Api Server');
  });
});

describe('InputField', () => {
  it('should convert name to label', () => {
    render(
      <FormProvider>
        <InputField name="username" />
      </FormProvider>
    );

    expect(screen.queryByLabelText(/^Username/)).toBeInTheDocument();
  });

  it('should override label with passed label value', () => {
    render(
      <FormProvider>
        <InputField name="username" label="Handle" />
      </FormProvider>
    );

    expect(screen.queryByLabelText(/^Handle/)).toBeInTheDocument();
  });

  it('should perform validation', () => {
    const msg = 'Must not exceed 5 characters';
    const handleValid = (val: string) => (val && val.length > 5 ? msg : '');
    render(
      <FormProvider>
        <InputField name="username" onValidate={handleValid} />
      </FormProvider>
    );

    const input = screen.queryByLabelText(/^Username/);
    expect(input).toBeInTheDocument();
    expect(screen.queryByText(msg)).not.toBeInTheDocument();
    expect(input).not.toBeNull();
    if (input) {
      fireEvent.change(input, { target: { value: 'john' } });
      expect(screen.queryByText(msg)).not.toBeInTheDocument();
      fireEvent.change(input, { target: { value: 'johnston' } });
      expect(screen.queryByText(msg)).toBeInTheDocument();
    }
  });
});

import { Helmet } from 'react-helmet';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface PageProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  children?: React.ReactNode;
  title: string;
}

function Page({ children, title, ...rest }: PageProps) {
  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
}

export default Page;

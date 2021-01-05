import { Helmet } from 'react-helmet';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface PageProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
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

export type { PageProps };
export default Page;

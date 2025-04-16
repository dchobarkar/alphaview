import { ReactNode } from 'react';
import clsx from 'clsx';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'max-w-5xl mx-auto px-4 py-8 min-h-screen flex align-center justify-center flex-col',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;

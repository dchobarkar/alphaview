import clsx from 'clsx';

interface SectionHeaderProps {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  description?: string;
  className?: string;
}

const baseStyles = {
  h1: 'text-3xl font-bold tracking-tight',
  h2: 'text-2xl font-semibold',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-medium',
  h5: 'text-base font-medium',
  h6: 'text-sm font-medium uppercase tracking-wider',
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  as = 'h2',
  description,
  className,
}) => {
  const Heading = as;

  return (
    <div className="mb-6 text-center">
      <Heading
        className={clsx(baseStyles[as], 'text-gray-900 pb-4', className)}
      >
        {title}
      </Heading>

      {description && (
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;

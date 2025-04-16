import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href, label = 'Back' }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline transition"
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
};

export default BackButton;

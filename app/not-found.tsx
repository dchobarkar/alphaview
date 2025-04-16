import Link from 'next/link';

import PageLayout from './ui/components/PageLayout';
import SectionHeader from './ui/components/SectionHeader';

export default function NotFound() {
  return (
    <PageLayout className="text-center">
      <SectionHeader
        as="h1"
        title="Oops! Page Not Found"
        description="We couldn’t find the page you were looking for. It may have been moved, or never existed."
      />

      <p className="text-gray-500 mb-8">
        But hey, no worries — you can always head back to safer grounds.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
      >
        🔙 Go back to homepage
      </Link>
    </PageLayout>
  );
}

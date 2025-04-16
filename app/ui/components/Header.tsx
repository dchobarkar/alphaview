import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b bg-white py-4 px-6 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-800 hover:underline"
        >
          AlphaView
        </Link>

        <span className="text-sm text-gray-400 italic">
          Your AI-powered API explorer
        </span>
      </div>
    </header>
  );
};

export default Header;

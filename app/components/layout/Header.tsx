import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={twMerge("w-full border-b bg-white shadow-sm", className)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            AlphaView
          </Link>
        </div>

        <span className="hidden sm:inline text-sm text-gray-500">
          Your AI-powered API explorer
        </span>
      </div>
    </header>
  );
};

export default Header;

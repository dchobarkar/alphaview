import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const navItems = [
    { label: "Core APIs", href: "/core" },
    { label: "Options", href: "/options" },
    { label: "Forex", href: "/forex" },
    { label: "Intelligence", href: "/intelligence" },
    { label: "Fundamental", href: "/fundamental" },
  ];

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
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm text-gray-500">
            Your AI-powered API explorer
          </span>
          <button
            type="button"
            className="md:hidden p-2 text-gray-500 hover:text-gray-600"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

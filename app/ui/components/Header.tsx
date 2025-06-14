import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b bg-accent px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link
          href="/"
          className="text-lg font-heading text-foreground font-semibold tracking-tight hover:underline"
        >
          AlphaView
        </Link>

        <span className="text-sm text-gray-500 italic">
          Your AI-powered API explorer
        </span>
      </div>
    </header>
  );
};

export default Header;

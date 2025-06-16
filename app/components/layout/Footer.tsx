import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const linkGroups = [
    {
      heading: "Markets",
      links: [
        { label: "Core Stock", href: "/core-stock" },
        { label: "Forex", href: "/forex" },
        { label: "Cryptocurrencies", href: "/crypto" },
        { label: "Commodities", href: "/commodities" },
      ],
    },
    {
      heading: "Data Types",
      links: [
        { label: "Options Data", href: "/options" },
        { label: "Fundamental Data", href: "/fundamental" },
        { label: "Alpha Intelligence", href: "/intelligence" },
      ],
    },
    {
      heading: "Indicators",
      links: [
        { label: "Economic Indicators", href: "/economic" },
        { label: "Technical Indicators", href: "/technical" },
      ],
    },
  ];

  return (
    <footer className={twMerge("w-full border-t bg-white", className)}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">AlphaView</h3>
            <p className="mt-2 text-sm text-gray-500">
              Your AI-powered API explorer for Alpha Vantage data
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-gray-900">
                {group.heading}
              </h3>
              <ul className="mt-2 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} AlphaView. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

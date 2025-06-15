import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={twMerge("w-full border-t bg-white", className)}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">AlphaView</h3>
            <p className="mt-2 text-sm text-gray-500">
              Your AI-powered API explorer for Alpha Vantage data
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/core-stock"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Core APIs
                </Link>
              </li>
              <li>
                <Link
                  href="/options"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Options Data
                </Link>
              </li>
              <li>
                <Link
                  href="/forex"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Forex APIs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://www.alphavantage.co/documentation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dchobarkar/alphaview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
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

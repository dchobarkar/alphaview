import Link from 'next/link';

interface LinkItem {
  name: string;
  href: string;
}

interface LinkButtonBoxProps {
  links: LinkItem[];
}

const LinkButtonBox: React.FC<LinkButtonBoxProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {links.map((link) => (
        <Link
          className="block text-center px-6 py-4 rounded-lg shadow-md bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200 border border-gray-300"
          key={link.name}
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default LinkButtonBox;

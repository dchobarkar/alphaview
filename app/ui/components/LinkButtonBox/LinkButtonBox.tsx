import Link from "next/link";

const LinkButtonBox = ({
  links,
}: {
  links: { name: string; href: string }[];
}) => {
  return (
    <div className="m-4">
      {links.map((link: { name: string; href: string }) => (
        <Link
          className="m-2 p-2 bg-white text-black"
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

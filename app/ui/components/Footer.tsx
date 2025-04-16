const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-4 px-6 mt-12 text-center text-sm text-gray-500">
      <div className="max-w-5xl mx-auto">
        © {new Date().getFullYear()} AlphaView. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

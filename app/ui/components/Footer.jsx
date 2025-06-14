const Footer = () => {
  return (
    <footer className="w-full border-t bg-background px-6 py-4 mt-12 text-center text-sm text-foreground font-body">
      <div className="mx-auto max-w-5xl">
        © {new Date().getFullYear()} AlphaView. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

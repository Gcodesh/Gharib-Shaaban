const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-gradient">Gharib Shaaban</p>
          <p className="text-muted-foreground">
            Turning ideas into interactive experiences
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gharib Shaaban. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Navbar = () => {
  return (
    <nav className="fixed top-8 right-8 z-20 flex gap-6 text-white text-lg fade-in fade-delay-1">
      <a href="#about" className="hover:text-gray-300 transition-colors">
        About
      </a>

      <a href="#projects" className="hover:text-gray-300 transition-colors">
        Projects
      </a>

      <a href="#contact" className="hover:text-gray-300 transition-colors">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
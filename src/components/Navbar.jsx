import { useEffect, useState } from "react";



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      backdrop-blur-md 
      ${isScrolled ? "bg-white/60 border-b border-black/10" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Logo / Title */}
        <div className="font-bold text-lg">
          Portfolio
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-gray-800">
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#skills" className="hover:text-black transition">Skills</a>
          <a href="#projects" className="hover:text-black transition">Projects</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>


        {/* Mobile Menu Button */}
        <button
        className="md:hidden text-gray-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"></path>
        </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-start px-8 pb-4 gap-4 text-gray-800 bg-white/80 backdrop-blur-md border-b border-black/10">
            <a href="#about" className="hover:text-black transition" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="hover:text-black transition" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="hover:text-black transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="hover:text-black transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
        )}


      </div>
    </header>
  );
}

export default Navbar;


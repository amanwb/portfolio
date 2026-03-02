import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Aman.dev</h1>

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-white transition cursor-pointer">Home</li>
          <li className="hover:text-white transition cursor-pointer">About</li>
          <li className="hover:text-white transition cursor-pointer">Skills</li>
          <li className="hover:text-white transition cursor-pointer">Projects</li>
          <li className="hover:text-white transition cursor-pointer">Contact</li>
        </ul>

        <button className="md:hidden px-3 py-2 border border-gray-400 text-gray-300 rounded">
          ☰
        </button>
      </div>
    </nav>
  );
}
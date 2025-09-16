import { useState } from "react";
import { Menu, X, Globe, User } from "lucide-react";
import logo from '../assets/metanodes_logo.svg'
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <a href="/"> <img src={logo} /></a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 font-bold text-xl">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About Us</a>
          <a href="#vision" className="hover:text-blue-400">Our Vision</a>
          <a href="#roadmap" className="hover:text-blue-400">Roadmap</a>
          <a href="#footer" className="hover:text-blue-400">Contact</a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-1 cursor-pointer">
            <Globe size={18} />
            <span>EN</span>
          </div>
          <a href="https://metanodes-admin.vercel.app/" className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border-2 hover:border-blue-400 px-4 py-2 rounded-md">
            <User size={18} className="text-blue-400" />
            <span>LOGIN</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white space-y-4 px-6 pb-6">
          <a href="#" className="block hover:text-cyan-400">Home</a>
          <a href="#" className="block hover:text-cyan-400">About Us</a>
          <a href="#" className="block hover:text-cyan-400">Our Vision</a>
          <a href="#" className="block hover:text-cyan-400">Roadmap</a>
          <a href="#" className="block hover:text-cyan-400">Contact</a>

          {/* Actions Mobile */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <Globe size={18} />
            <span>EN</span>
          </div>
          <a href="https://metanodes-admin.vercel.app/" className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md w-full justify-center">
            <User size={18} className="text-cyan-400" />
            <span>LOGIN</span>
          </a>

        </div>
      )}
    </header>
  );
}

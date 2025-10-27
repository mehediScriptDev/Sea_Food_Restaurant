import { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link, NavLink } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CONTACT US', path: 'contact' },
    { name: 'DASHBOARD', path: 'dashboard' },
    { name: 'OUR MENU', path: 'menu' },
    { name: 'OUR SHOP', path: 'shop' }
  ];

  return (
    <nav className="bg-black/90 sticky w-full top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <div className="text-white">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wider">BISTRO BOSS</h1>
                <p className="text-xs md:text-sm tracking-widest mt-1">RESTAURANT</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-white hover:text-yellow-300 text-sm font-semibold transition-colors duration-200"
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Cart Icon with Badge */}
            <Link
              to="#cart"
              className="relative text-white hover:text-yellow-300 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Sign Out Button */}
            <Link
              to="#signout"
              className="flex items-center gap-2 text-white hover:text-yellow-300 text-sm font-semibold transition-colors duration-200"
            >
              <span>SIGN OUT</span>
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile Cart */}
            <Link
              to="#cart"
              className="relative text-yellow-400"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-400 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-gray-700 rounded font-semibold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="#signout"
            className="flex items-center gap-2 px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-gray-700 rounded font-semibold transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>SIGN OUT</span>
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
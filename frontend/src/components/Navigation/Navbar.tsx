import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "/images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Join Us", href: "/join" },
  ];

  const isActive = (path: string): string => {
    return location.pathname === path
      ? "text-white font-semibold font-poppins hover:text-colorstack-gold transition-colors duration-300"
      : "text-white font-semibold font-poppins hover:text-colorstack-gold transition-colors duration-300";
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-20 flex items-center bg-black/70 backdrop-blur-md pt-5">
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="ColorStack Logo" className="h-12 w-auto" />
              <span className="text-2xl font-poppins font-semibold text-colorstack-gold">ColorStack Grambling</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.slice(0, -1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive(
                    item.href
                  )}`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Join Us button */}
              <Link
                to="/join"
                className="bg-colorstack-gold hover:bg-white text-black font-medium px-5 py-2 rounded-md transition-all duration-300 hover:translate-y-[2px]"
              >
                Join Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden animate-slide-in" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.slice(0, -1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(
                  item.href
                )}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Join Us button */}
            <Link
              to="/join"
              className="block px-3 py-2 mt-2 bg-colorstack-gold hover:bg-colorstack-gold/90 text-black font-medium rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

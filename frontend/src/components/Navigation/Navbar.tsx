import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "/images/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when changing route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Partnerships", href: "/partnerships" },
    { name: "Join Us", href: "/join" },
  ];

  const isActive = (path: string): string => {
    return location.pathname === path
      ? "text-colorstack-gold font-semibold font-poppins transition-colors duration-300"
      : "text-white font-semibold font-poppins hover:text-colorstack-gold transition-colors duration-300";
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-20 flex flex-col w-full transition-all duration-300 ${
      isScrolled ? "bg-black/80 shadow-md backdrop-blur-md py-1" : "bg-black/70 backdrop-blur-sm py-2"
    }`}>
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1 sm:gap-2">
              <img src={Logo} alt="ColorStack Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
              <span className="text-lg sm:text-xl md:text-2xl font-poppins font-semibold text-colorstack-gold truncate">ColorStack Grambling</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-8 xl:ml-10 flex items-center space-x-1 lg:space-x-3 xl:space-x-4">
              {navigation.slice(0, -1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-2 lg:px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-300 ${isActive(
                    item.href
                  )}`}
                >
                  {item.name}
                </Link>
              ))}
              {/* Join Us button */}
              <Link
                to="/join"
                className="bg-colorstack-gold hover:bg-white text-black font-medium px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 rounded-md transition-all duration-300 hover:translate-y-[2px] text-sm lg:text-base flex items-center"
              >
                Join Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800/40 focus:outline-none"
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

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[350px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        }`} 
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-black/90 backdrop-blur-md">
          {navigation.slice(0, -1).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-3 rounded-md text-sm sm:text-base font-medium border-b border-gray-800 ${
                location.pathname === item.href 
                  ? "text-colorstack-gold" 
                  : "text-white hover:text-colorstack-gold"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Join Us button */}
          <Link
            to="/join"
            className="block w-full text-center px-3 py-3 mt-3 bg-colorstack-gold hover:bg-colorstack-gold/90 text-black font-medium rounded-md transition-colors duration-300 text-sm sm:text-base"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Calendar, 
  Users, 
  LogOut, 
  Menu,
  X
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Event Management", href: "/admin/events", icon: Calendar },
    { name: "Spotlight Management", href: "/admin/spotlight", icon: Users },
  ];

  const isActive = (path: string): string => {
    return location.pathname === path
      ? "bg-colorstack-gold text-white"
      : "text-gray-700 hover:bg-colorstack-light hover:text-colorstack-gold";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className={`hidden md:flex flex-col w-64 bg-white border-r border-gray-200 ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <div className="flex items-center justify-center h-16 px-4 border-b bg-colorstack-black text-white">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${isActive(
                  item.href
                )}`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <Link
              to="/"
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Back to Site
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile menu */}
      <div className="md:hidden fixed inset-0 z-40 flex">
        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" 
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white animate-slide-in">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4 mb-5">
                  <h2 className="text-xl font-semibold text-colorstack-gold">Admin Panel</h2>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${isActive(
                        item.href
                      )}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="mr-4 h-6 w-6" />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <Link
                  to="/"
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Back to Site
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <button
              type="button"
              className="md:hidden px-4 text-gray-500 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <h1 className="text-lg font-semibold text-gray-800">
                {navigation.find((item) => item.href === location.pathname)?.name || "Admin"}
              </h1>
            </div>
            <div>
              <span className="text-sm text-gray-700">Admin User</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

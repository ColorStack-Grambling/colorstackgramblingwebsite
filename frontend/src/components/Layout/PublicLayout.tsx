
import { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-colorstack-black text-white py-8">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-colorstack-gold">GSU ColorStack</h3>
              <p className="text-gray-300">
                Empowering Black and Latinx computer science students at Grambling State University.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-colorstack-gold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-colorstack-gold transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-colorstack-gold transition-colors">About Us</a></li>
                <li><a href="/events" className="text-gray-300 hover:text-colorstack-gold transition-colors">Events</a></li>
                <li><a href="/partnerships" className="text-gray-300 hover:text-colorstack-gold transition-colors">Partnerships</a></li>
                <li><a href="/join" className="text-gray-300 hover:text-colorstack-gold transition-colors">Join Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-colorstack-gold">Contact</h3>
              <p className="text-gray-300">
                Grambling State University<br />
                403 Main Street<br />
                Grambling, LA 71245<br />
                gsucolorstack@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} GSU ColorStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;

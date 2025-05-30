import { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <header>
        <Navbar />
      </header>
      
      <main className="flex-1 relative z-10">
        {children}
      </main>
      
      <footer className="bg-colorstack-black text-white font-poppins py-8">
        <div className="container-custom mx-auto text-center">
          <img src="/images/logo.png" alt="ColorStack Logo" className="h-32 mx-auto mb-4" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            <a href="/events" className="text-white hover:text-colorstack-gold transition-colors">Events</a>
            <a href="/partnerships" className="text-white hover:text-colorstack-gold transition-colors">Sponsors</a>
            <a href="/about#leadership" className="text-white hover:text-colorstack-gold transition-colors">Meet Us</a>
            <a href="/about" className="text-white hover:text-colorstack-gold transition-colors">About Us</a>
          </div>
          <div className="flex justify-center items-center gap-6 mb-6">
            <a href="mailto:colorstack.grambling@gmail.com" className="text-white hover:text-colorstack-gold transition-colors">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/company/colorstack-grambling/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-colorstack-gold transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://instagram.com/colorstackgrambling" target="_blank" rel="noopener noreferrer" className="text-white hover:text-colorstack-gold transition-colors">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://colorstack-grambling.slack.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-colorstack-gold transition-colors">
              <i className="fab fa-slack text-2xl"></i>
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} GSU ColorStack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;

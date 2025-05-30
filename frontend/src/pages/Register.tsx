
import { useState, useEffect } from "react";
import PublicLayout from "../components/Layout/PublicLayout";
import RegistrationForm from "../components/Forms/RegistrationForm";
import { events } from "../utils/mockData";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [searchParams] = useSearchParams();
  const [eventData, setEventData] = useState<{
    id: string, 
    name: string,
    date: string,
    time: string,
    location: string
  } | null>(null);
  
  useEffect(() => {
    const eventId = searchParams.get("event");
    
    if (eventId) {
      const event = events.find(e => e.id.toString() === eventId);
      if (event) {
        setEventData({
          id: eventId,
          name: event.title,
          date: event.date,
          time: event.time,
          location: event.location
        });
      }
    }
  }, [searchParams]);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-black min-h-[40vh] flex items-center pt-16 pb-8">
        <div className="container-custom mx-auto py-8 md:py-12">
          <div className="flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.2 }} 
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              {eventData ? `Register for` : "Event Registration"}
            </motion.h1>
            {eventData && (
              <motion.h1 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 1, type: "spring", stiffness: 100 }} 
                className="text-3xl md:text-5xl font-bold text-colorstack-gold mb-4 pb-2 text-center"
              >
                {eventData.name}
              </motion.h1>
            )}
            
            {eventData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex items-center justify-center gap-4 mb-6 text-white/80 flex-wrap"
              >
                <span className="flex items-center gap-1">
                  <i className="fas fa-calendar-alt text-colorstack-gold"></i>
                  {new Date(eventData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-clock text-colorstack-gold"></i>
                  {eventData.time}
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  <i className="fas fa-map-marker-alt text-colorstack-gold"></i>
                  {eventData.location}
                </span>
              </motion.div>
            )}
            
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "200px" }} 
              transition={{ duration: 0.5, delay: 0.3 }} 
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6" 
              style={{ maxWidth: "200px" }} 
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: 0.5 }} 
              className="text-lg text-white max-w-2xl mx-auto text-center"
            >
              Complete the form below to reserve your spot at this event.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Registration Form Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute w-8 h-8 bg-colorstack-gold rounded-full top-12 left-12 animate-pulse z-10"></div>
        <div className="absolute w-4 h-4 bg-colorstack-gold rounded-full top-24 left-20 animate-bounce z-10"></div>
        <div className="absolute w-7 h-7 bg-colorstack-gold rounded-full bottom-16 right-14 animate-pulse z-10"></div>
        <div className="absolute w-5 h-5 bg-colorstack-gold rounded-full bottom-28 right-24 animate-float z-10"></div>
        
        {/* Background Blur Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-colorstack-gold blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-colorstack-gold blur-3xl"></div>
        </div>
        
        <div className="container-custom mx-auto relative z-10">
          {!eventData ? (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center py-12 bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-8 max-w-3xl mx-auto transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h2 className="text-2xl font-bold mb-6 text-colorstack-gold">Select an Event to Register</h2>
              <p className="text-white mb-8">
                Please select an event from our events page to register.
              </p>
              <Link to="/events" className="bg-colorstack-gold hover:bg-white text-black font-medium px-5 py-2 rounded-md transition-all duration-300 hover:translate-y-[2px]">
                Browse Events
              </Link>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-8 max-w-3xl mx-auto transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <RegistrationForm eventId={eventData.id} eventName={eventData.name} />
            </motion.div>
          )}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container-custom mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-colorstack-gold mb-3">
              Frequently Asked Questions
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6"
              style={{ maxWidth: "200px" }}
            />
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-6 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg font-bold mb-2 text-colorstack-gold">Is registration free?</h3>
              <p className="text-white">
                Yes, all ColorStack events are free for students to attend.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-6 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg font-bold mb-2 text-colorstack-gold">Do I need to be a ColorStack member to attend?</h3>
              <p className="text-white">
                Most events are open to all GSU students interested in tech and computing, regardless of membership status.
                Some specialized events may be member-only, which will be clearly indicated.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-6 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg font-bold mb-2 text-colorstack-gold">What if I can no longer attend?</h3>
              <p className="text-white">
                If you're unable to attend an event you've registered for, please email us at colorstack@gram.edu 
                to cancel your registration so we can make your spot available to others.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-6 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg font-bold mb-2 text-colorstack-gold">Will food be provided?</h3>
              <p className="text-white">
                Food is typically provided for events longer than 2 hours. The event description will specify if food 
                will be available, and we collect dietary restrictions during registration to accommodate needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Register;

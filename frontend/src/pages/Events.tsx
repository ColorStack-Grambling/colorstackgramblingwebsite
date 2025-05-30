import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import PublicLayout from "../components/Layout/PublicLayout";
import EventCard from "../components/Events/EventCard";
import { events } from "../utils/mockData";
import { Link } from "react-router-dom";

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  
  const filteredEvents = useMemo(() => {
    if (filter === "upcoming") {
      return events.filter(event => !event.isPast);
    } else if (filter === "past") {
      return events.filter(event => event.isPast);
    } else {
      return events;
    }
  }, [filter]);
  
  const upcomingCount = useMemo(() => 
    events.filter(event => !event.isPast).length, 
  []);
  
  const pastCount = useMemo(() => 
    events.filter(event => event.isPast).length, 
  []);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-black pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-14 md:pb-16">
        <div className="container-custom mx-auto text-center px-4 sm:px-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{ once: true }} 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold mb-4 sm:mb-5 md:mb-6"
          >
            Events
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "200px" }} 
            transition={{ duration: 0.5, delay: 0.3 }} 
            viewport={{ once: true }} 
            className="h-1 bg-colorstack-gold mx-auto rounded-full mb-4 sm:mb-5 md:mb-6" 
            style={{ maxWidth: "200px" }} 
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.5 }} 
            viewport={{ once: true }} 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Join us for workshops, networking opportunities, and more to build your skills and community.
          </motion.p>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Filter Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{ once: true }} 
            className="flex justify-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
          >
            <div className="inline-flex rounded-md shadow-sm w-full sm:w-auto overflow-hidden" role="group">
              <button
                type="button"
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-l-lg ${
                  filter === "all"
                    ? "bg-colorstack-gold text-colorstack-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setFilter("all")}
              >
                <span className="hidden sm:inline">All Events</span>
                <span className="sm:hidden">All</span>
                <span className="ml-1">({events.length})</span>
              </button>
              <button
                type="button"
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium ${
                  filter === "upcoming"
                    ? "bg-colorstack-gold text-colorstack-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } `}
                onClick={() => setFilter("upcoming")}
              >
                <span className="hidden sm:inline">Upcoming</span>
                <span className="sm:hidden">Up.</span>
                <span className="ml-1">({upcomingCount})</span>
              </button>
              <button
                type="button"
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-r-lg ${
                  filter === "past"
                    ? "bg-colorstack-gold text-colorstack-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setFilter("past")}
              >
                Past ({pastCount})
              </button>
            </div>
          </motion.div>
          
          {/* Events List */}
          {filteredEvents.length > 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7 }} 
              viewport={{ once: true }} 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4 sm:px-0"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 flex flex-col overflow-hidden group transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80`}
                >
                  {/* Date Badge */}
                  <div className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-4 md:right-5 z-10">
                    <div className="bg-colorstack-gold text-black font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>

                  {/* Event Image */}
                  {event.image && (
                    <div className="overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 sm:h-52 md:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}

                  {/* Event Content */}
                  <div className="flex-1 flex flex-col p-4 sm:p-5 md:p-6 text-white">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-colorstack-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white/80 mb-3 sm:mb-4 md:mb-5 line-clamp-3 text-sm sm:text-base">
                      {event.description}
                    </p>
                    <div className="flex items-center text-xs sm:text-sm text-white/70 mb-3 sm:mb-4 md:mb-5 gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-colorstack-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })} {" "}
                        • {event.time}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <Link
                        to={`/register?event=${event.id}`}
                        className="bg-colorstack-gold hover:bg-white text-black font-semibold py-2 sm:py-3 px-4 sm:px-6 duration-300 rounded-md transition-all w-full block text-center shadow-md hover:shadow-lg hover:shadow-colorstack-gold/20 hover:translate-y-[-2px] text-sm sm:text-base"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7 }} 
              viewport={{ once: true }} 
              className="text-center py-8 sm:py-10 md:py-12 bg-gray-50 rounded-lg mx-4 sm:mx-0"
            >
              <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4">No events found for the selected filter.</p>
              <button
                onClick={() => setFilter("all")}
                className="text-colorstack-blue hover:underline text-sm sm:text-base"
              >
                View all events
              </button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Host Event CTA */}
      <section className="py-12 sm:py-14 md:py-16 bg-black">
        <div className="container-custom mx-auto px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{ once: true }} 
            className="bg-transparent rounded-lg shadow-md border border-colorstack-gold p-4 sm:p-6 md:p-8 max-w-3xl mx-auto"
          >
            <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-colorstack-gold">
                  Want to Host an Event with Us?
                </h2>
                <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
                  If you're a company, organization, or individual interested in hosting a workshop, 
                  tech talk, or other event with ColorStack Grambling, we'd love to collaborate with you.
                </p>
                <a 
                  href="mailto:colorstack.grambling@gmail.com"
                  className="btn-primary inline-flex items-center justify-center gap-2 bg-colorstack-gold hover:bg-white text-black font-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-colorstack-gold/20 hover:translate-y-[-2px] duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  <i className="fas fa-envelope text-lg sm:text-xl md:text-2xl"></i>
                  Contact Us
                </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Events;

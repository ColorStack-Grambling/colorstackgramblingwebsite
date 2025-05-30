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
      <section className="bg-black pt-28 pb-16">
        <div className="container-custom mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-colorstack-gold mb-6">
            Events
          </motion.h1>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "200px" }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6" style={{ maxWidth: "200px" }} />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} viewport={{ once: true }} className="text-xl text-white/90 max-w-2xl mx-auto">
            Join us for workshops, networking opportunities, and more to build your skills and community.
          </motion.p>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Filter Controls */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filter === "all"
                    ? "bg-colorstack-gold text-colorstack-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setFilter("all")}
              >
                All Events ({events.length})
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  filter === "upcoming"
                    ? "bg-colorstack-gold text-colorstack-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } `}
                onClick={() => setFilter("upcoming")}
              >
                Upcoming ({upcomingCount})
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
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
                  <div className="absolute top-5 right-5 z-10">
                    <div className="bg-colorstack-gold text-black font-bold px-4 py-2 rounded-full text-sm shadow-lg">
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
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}

                  {/* Event Content */}
                  <div className="flex-1 flex flex-col p-6 text-white">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-colorstack-gold transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-white/80 mb-5 line-clamp-3">{event.description}</p>
                    <div className="flex items-center text-sm text-white/70 mb-5 gap-2">
                      <svg className="w-5 h-5 text-colorstack-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>
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
                        className="bg-colorstack-gold hover:bg-white text-black font-semibold py-3 px-6 duration-300 rounded-md transition-all w-full block text-center shadow-md hover:shadow-lg hover:shadow-colorstack-gold/20 hover:translate-y-[-2px]"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-xl text-gray-600">No events found for the selected filter.</p>
              <button
                onClick={() => setFilter("all")}
                className="mt-4 text-colorstack-blue hover:underline"
              >
                View all events
              </button>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Host Event CTA */}
      <section className="py-16 bg-black">
        <div className="container-custom mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{ once: true }} 
            className="bg-transparent rounded-lg shadow-md border border-colorstack-gold p-8 max-w-3xl mx-auto"
          >
            <div className="items-center">
                <h2 className="text-2xl font-bold mb-4 text-colorstack-gold">Want to Host an Event with Us?</h2>
                <p className="text-white mb-6">
                  If you're a company, organization, or individual interested in hosting a workshop, 
                  tech talk, or other event with ColorStack Grambling, we'd love to collaborate with you.
                </p>
                <a 
                  href="mailto:colorstack.grambling@gmail.com"
                  className="btn-primary inline-flex items-center gap-2 bg-colorstack-gold hover:bg-white text-black font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-colorstack-gold/20 hover:translate-y-[-2px] duration-300"
                >
                  <i className="fas fa-envelope text-2xl"></i>
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

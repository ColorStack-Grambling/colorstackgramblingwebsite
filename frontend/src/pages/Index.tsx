import { useMemo, useState, useEffect } from "react";
import PublicLayout from "../components/Layout/PublicLayout";
import MemberSpotlight from "../components/Members/MemberSpotlight";
import EventCard from "../components/Events/EventCard";
import CompanySlider from "../components/Home/CompanySlider";
import { Link } from "react-router-dom";
import { members, events } from "../utils/mockData";
import { motion } from 'framer-motion';

const Index = () => {
  const featuredMembers = useMemo(() => members.filter((member) => member.featured), []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutSlide, setAboutSlide] = useState(0);

  useEffect(() => {
    if (featuredMembers.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMembers.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [featuredMembers.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const upcomingEvents = useMemo(() => events.filter((event) => !event.isPast).slice(0, 3), []);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-black min-h-screen flex items-center">
        <div className="container-custom mx-auto py-16 md:py-24">
          <div className="pl-10 pr-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 pl-10">
              <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-4xl md:text-5xl font-bold text-white mb-3">
                Welcome to
              </motion.h1>
              <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, type: "spring", stiffness: 100 }} className="text-4xl md:text-8xl font-bold text-colorstack-gold mb-6 pb-2">
                ColorStack Grambling
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="text-2xl font-poppins font-semibold md:text-2xl text-white/90 mb-8">
                Redefining Black Excellence in Tech.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4">
                <Link to="/join" className="bg-colorstack-gold hover:bg-white border-2 border-black text-colorstack-black font-medium py-3 px-8 rounded-md transition-all duration-300 hover:translate-y-[-2px]">
                  Join Us
                </Link>
                <Link to="/about" className="bg-transparent border-2 border-colorstack-gold text-colorstack-gold hover:border-white hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
                  Learn More
                </Link>
              </motion.div>
            </div>
            <div className="relative w-full h-auto md:w-2/3 overflow-visible shadow-lg mx-auto animate-slow-float" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
              <div className="absolute w-8 h-8 bg-colorstack-gold rounded-full -top-4 -left-2 animate-pulse"></div>
              <div className="absolute w-4 h-4 bg-colorstack-gold rounded-full top-8 -left-6 animate-bounce"></div>
              <div className="absolute w-9 h-9 bg-colorstack-gold rounded-full -bottom-4 -right-2 animate-pulse"></div>
              <div className="absolute w-5 h-5 bg-colorstack-gold rounded-full -bottom-6 right-12 animate-float"></div>
              <div className="w-full h-full overflow-hidden" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
                <img src="/images/hero.png" alt="ColorStack Grambling" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Spotlight Section */}
      {featuredMembers.length > 0 && (
        <section className="py-16 bg-black">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl font-bold font-poppins mb-3 text-colorstack-gold pb-5">
                Member Spotlight
              </motion.h2>
              <motion.div initial={{ width: 0 }} whileInView={{ width: "200px" }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="h-1 bg-colorstack-gold mx-auto rounded-full" style={{ maxWidth: "200px" }} />
            </div>
            <div className="relative mx-4 md:mx-12">
              <div className="absolute w-8 h-8 bg-colorstack-gold rounded-full -top-4 -left-2 animate-pulse"></div>
              <div className="absolute w-4 h-4 bg-colorstack-gold rounded-full top-8 -left-6 animate-bounce"></div>
              <div className="absolute w-9 h-9 bg-colorstack-gold rounded-full -bottom-4 -right-2 animate-pulse"></div>
              <div className="absolute w-5 h-5 bg-colorstack-gold rounded-full -bottom-6 right-12 animate-float"></div>
              <div className="bg-transparent p-8">
                <div className="overflow-hidden relative">
                  <div className="transition-transform duration-500 ease-out flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {featuredMembers.map((member) => (
                      <div key={member.id} className="w-full flex-shrink-0">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                          <MemberSpotlight member={member} featured={true} />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
                {featuredMembers.length > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {featuredMembers.map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-colorstack-gold' : 'bg-white/30'}`} aria-label={`Go to slide ${index + 1}`} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      <section className="py-16 bg-black">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mx-4 md:mx-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="w-full md:w-2/5">
              <p className="text-white text-lg mb-4 font-poppins">
                ColorStack at Grambling State University is dedicated to increasing the number of Black and Latinx students who graduate with computing degrees.
              </p>
              <p className="text-white text-lg mb-6 font-poppins">
                Our chapter provides academic support, professional development, and community building for students of color in computer science and related fields.
              </p>
              <Link to="/about" className="bg-transparent border-2 border-colorstack-gold text-colorstack-gold hover:translate-y-[2px] hover:border-white hover:text-white font-medium py-3 px-8 rounded-md inline-flex transition-all duration-300">
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="w-full md:w-3/5">
              <div className="relative">
                <div className="absolute w-8 h-8 bg-colorstack-gold rounded-full -top-4 -left-2 animate-pulse z-10"></div>
                <div className="absolute w-4 h-4 bg-colorstack-gold rounded-full top-8 -left-6 animate-bounce z-10"></div>
                <div className="absolute w-9 h-9 bg-colorstack-gold rounded-full -bottom-4 -right-2 animate-pulse z-10"></div>
                <div className="absolute w-5 h-5 bg-colorstack-gold rounded-full -bottom-6 right-12 animate-float z-10"></div>
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <div className="transition-transform duration-1000 ease-out flex" style={{ transform: `translateX(-${aboutSlide * 100}%)` }}>
                    <div className="w-full flex-shrink-0">
                      <img src="/images/about1.jpeg" alt="ColorStack students collaborating" className="w-full h-auto aspect-[4/3] object-cover" />
                    </div>
                    <div className="w-full flex-shrink-0">
                      <img src="/images/about2.jpeg" alt="ColorStack event" className="w-full h-auto aspect-[4/3] object-cover" />
                    </div>
                    <div className="w-full flex-shrink-0">
                      <img src="/images/about3.jpeg" alt="ColorStack workshop" className="w-full h-auto aspect-[4/3] object-cover" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4 space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button key={index} onClick={() => setAboutSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${aboutSlide === index ? 'bg-colorstack-gold' : 'bg-white/30'}`} aria-label={`Go to slide ${index + 1}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="pt-16 pb-5 bg-black relative">
        {/* Floating Bubbles */}
        <div className="absolute w-8 h-8 bg-colorstack-gold rounded-full top-12 left-12 animate-pulse z-10"></div>
        <div className="absolute w-4 h-4 bg-colorstack-gold rounded-full top-24 left-20 animate-bounce z-10"></div>
        <div className="absolute w-7 h-7 bg-colorstack-gold rounded-full bottom-16 right-14 animate-pulse z-10"></div>
        <div className="absolute w-5 h-5 bg-colorstack-gold rounded-full bottom-28 right-24 animate-float z-10"></div>

        <div className="container-custom mx-auto">
            <div className="text-center mb-8">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl font-bold font-poppins mb-3 text-colorstack-gold"
            >
                Our Impact
            </motion.h2>
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "200px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6"
                style={{ maxWidth: "200px" }}
            />
            </div>

            {/* Orbital Bubbles Area */}
            <div className="relative h-[600px] md:h-[800px] overflow-hidden font-poppins flex justify-center items-center">
                {/* Center Bubble - 250+ Registered Members (stationary) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="absolute w-56 h-56 md:w-80 md:h-80 rounded-full bg-colorstack-gold flex flex-col items-center justify-center text-black shadow-xl z-20 animate-orbit-pulse"
                >
                    <h3 className="text-5xl md:text-7xl font-bold mb-2">250+</h3>
                    <p className="text-lg md:text-2xl font-medium px-4 text-center">Registered Members</p>
                </motion.div>
                
                {/* Orbital Container - Provides the center point for all orbiting elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* 54% First-Gen Students - Orbiting bubble 1 */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute w-36 h-36 md:w-48 md:h-48 animate-orbit1"
                    >
                        <div className="w-full h-full rounded-full bg-colorstack-gold text-black flex flex-col items-center justify-center shadow-xl circle-glow orbit-bubble hover:cursor-pointer">
                            <h3 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">54%</h3>
                            <p className="text-xs md:text-lg font-medium px-2 md:px-4 text-center">First-Gen Students</p>
                        </div>
                    </motion.div>

                    {/* 49% Low-Income Students - Orbiting bubble 2 */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="absolute w-33 h-33 md:w-44 md:h-44 animate-orbit2"
                    >
                        <div className="w-full h-full rounded-full bg-colorstack-gold text-black flex flex-col items-center justify-center shadow-xl circle-glow orbit-bubble hover:cursor-pointer">
                            <h3 className="text-2xl md:text-4xl font-bold mb-1">49%</h3>
                            <p className="text-xs md:text-base font-medium px-2 md:px-3 text-center">Low-Income Students</p>
                        </div>
                    </motion.div>

                    {/* 30% Identify As Women - Orbiting bubble 3 */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="absolute w-33 h-33 md:w-44 md:h-44 animate-orbit3"
                    >
                        <div className="w-full h-full rounded-full bg-colorstack-gold text-black flex flex-col items-center justify-center shadow-xl circle-glow orbit-bubble hover:cursor-pointer">
                            <h3 className="text-lg md:text-4xl font-bold mb-0.5">30%</h3>
                            <p className="text-xs md:text-base font-medium px-1 md:px-2 text-center">Identify As Women</p>
                        </div>
                    </motion.div>

                    {/* 25+ 2025 Offers - Orbiting bubble 4 */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="absolute w-33 h-33 md:w-44 md:h-44 animate-orbit4"
                    >
                        <div className="w-full h-full rounded-full bg-colorstack-gold text-black flex flex-col items-center justify-center shadow-xl circle-glow orbit-bubble hover:cursor-pointer">
                            <h3 className="text-base md:text-4xl font-bold mb-0.5">25+</h3>
                            <p className="text-xs md:text-base font-medium px-1 md:px-2 text-center">2025 Offers</p>
                        </div>
                    </motion.div>

                    {/* 10+ Industry Partners - Orbiting bubble 5 */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.1 }}
                        viewport={{ once: true }}
                        className="absolute w-33 h-33 md:w-44 md:h-44 animate-orbit5"
                    >
                        <div className="w-full h-full rounded-full bg-colorstack-gold text-black flex flex-col items-center justify-center shadow-xl orbit-bubble circle-glow hover:cursor-pointer">
                            <h3 className="text-[10px] md:text-4xl font-bold mb-0">10+</h3>
                            <p className="text-xs md:text-base font-medium px-0.5 text-center leading-tight">Partners</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        <div className="text-center pt-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-4xl font-bold font-poppins mb-3 text-colorstack-gold"
            >
                We've secured offers from:
            </motion.h2>
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "200px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6"
                style={{ maxWidth: "200px" }}
            />
        </div>
      </section>


      {/* Company Slider */}
      <CompanySlider />

      {/* Upcoming Events */}
    <section className="section-padding font-poppins bg-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-colorstack-gold blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-colorstack-gold blur-3xl"></div>
        </div>
        
        <div className="container-custom mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold text-center mb-3">
                    Upcoming Events
                </h2>
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "200px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6"
                    style={{ maxWidth: "200px" }}
                />
                <p className="text-white/80 text-center max-w-2xl mb-8">
                    Join us for exclusive tech workshops, networking opportunities, and career development sessions.
                </p>
                <Link
                    to="/events"
                    className="text-colorstack-gold hover:text-white hover:border-white hover:translate-y-[2px] transition-all duration-300 font-medium py-2 px-6 rounded-md transition-all border border-colorstack-gold flex items-center gap-2"
                >
                    <span>View All Events</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M13 5l7 7-7 7M5 12h15" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </motion.div>
            
            {upcomingEvents.length > 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10"
                >
                    {upcomingEvents.map((event, index) => (
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
                              })}{" "}
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center py-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)]"
                >
                    <p className="text-xl text-white/80 mb-6">
                        No upcoming events at the moment. Check back soon!
                    </p>
                    <Link
                        to="/events"
                        className="bg-colorstack-gold hover:bg-colorstack-gold/90 text-black font-medium py-3 px-8 rounded-md transition-all inline-block shadow-md hover:shadow-lg hover:shadow-colorstack-gold/20 hover:translate-y-[-2px]"
                    >
                        Browse All Events
                    </Link>
                </motion.div>
            )}
        </div>
    </section>


      {/* Get Involved Section */}
      <section className="section-padding font-poppins bg-black">
        <div className="container-custom mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold text-center mb-3">
              Get Involved
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Sponsorship Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl border border-colorstack-gold/30 p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <div className="w-16 h-16 bg-colorstack-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-colorstack-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-white/70 text-center mb-2">Collaborate With Us</p>
              <h3 className="text-2xl md:text-3xl font-bold text-colorstack-gold mb-6 text-center">
                Sponsorship
              </h3>
              <Link to="/partnerships" className="mt-auto bg-transparent border-2 border-colorstack-gold text-colorstack-gold hover:border-white hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:translate-y-[-2px]">
                Learn More
              </Link>
            </motion.div>

            {/* Join The Community Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-colorstack-gold rounded-2xl p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.5)]"
            >
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-black/80 text-center mb-2">Join Us</p>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
                Join The Community
              </h3>
              <Link to="/join" className="mt-auto bg-black hover:text-white text-colorstack-gold border-2 border-black font-medium py-3 px-8 rounded-md transition-all duration-300 hover:translate-y-[-2px]">
                Apply Now
              </Link>
            </motion.div>

            {/* Contact Us Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl border border-colorstack-gold/30 p-8 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <div className="w-16 h-16 bg-colorstack-gold/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-colorstack-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white/70 text-center mb-2">Get In Touch</p>
              <h3 className="text-2xl md:text-3xl font-bold text-colorstack-gold mb-6 text-center">
                Contact Us
              </h3>
              <a href="mailto:colorstack.grambling@gmail.com" className="mt-auto bg-transparent border-2 border-colorstack-gold text-colorstack-gold hover:border-white hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:translate-y-[-2px]">
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Index;

import PublicLayout from "../components/Layout/PublicLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Partnerships = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-black pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-12 sm:pb-14 md:pb-16">
        <div className="container-custom mx-auto text-center px-4 sm:px-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            viewport={{ once: true }} 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold mb-4 sm:mb-5 md:mb-6"
          >
            Partnerships & Sponsorships
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
            Support the next generation of Black and Latinx tech talent and connect with promising students.
          </motion.p>
        </div>
      </section>
      
      {/* Why Partner */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="container-custom mx-auto relative z-10 px-4 sm:px-0">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="pb-8 sm:pb-10 md:pb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold mb-3">
                  Why Partner With Us?
                </h2>
              </motion.div>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                When you partner with GSU ColorStack, you're investing in the future of tech. Our members are talented, 
                motivated students from underrepresented backgrounds who are eager to make their mark in the technology industry.
              </p>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Through your support, you'll help provide critical resources for our programming, while also gaining 
                access to a diverse pool of promising talent for internships and full-time positions.
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                Our partnerships are designed to be mutually beneficial, offering companies various ways to engage 
                with our community while helping students build the skills and connections they need to succeed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
                <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-colorstack-gold rounded-full -top-2 sm:-top-4 -left-1 sm:-left-2 animate-pulse z-10"></div>
                <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-colorstack-gold rounded-full top-6 sm:top-8 -left-3 sm:-left-6 animate-bounce z-10"></div>
                <div className="absolute w-6 h-6 sm:w-9 sm:h-9 bg-colorstack-gold rounded-full -bottom-2 sm:-bottom-4 -right-1 sm:-right-2 animate-pulse z-10"></div>
                <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-colorstack-gold rounded-full -bottom-3 sm:-bottom-6 right-8 sm:right-12 animate-float z-10"></div>
              <img
                src="/images/sponsor.jpeg" 
                alt="Industry professionals networking with students" 
                className="rounded-lg shadow-md w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Partnership Opportunities */}
      <section className="section-padding">
        <div className="container-custom mx-auto px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold text-center mb-3">
              Partnership Opportunities
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold">Sponsor an Event</h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Support technical workshops, hackathons, career panels, and networking events that help our 
                members develop skills and make industry connections.
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                Event sponsors receive recognition in all event promotions, the opportunity to speak or present 
                at the event, and direct engagement with attendees.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold">Mentorship Program</h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Connect your employees with our members for one-on-one or group mentorship. This provides valuable 
                guidance to students while allowing your team to give back.
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                Mentorship can be structured around technical skills, career guidance, or project-based learning.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold">Technical Workshops</h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Host a workshop where your engineers can share their expertise with our members, covering topics 
                like software development, data science, cybersecurity, or emerging technologies.
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                These workshops provide valuable learning opportunities for students while showcasing your company's technical excellence.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold">Recruitment Pipeline</h3>
              <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Gain early access to talented students for internships and full-time positions. We can help 
                connect you with members who match your hiring needs.
              </p>
              <p className="text-white/80 text-sm sm:text-base">
                Partners receive priority at our career events and can post opportunities directly to our member network.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-12 sm:py-14 md:py-16 bg-black relative overflow-hidden">
        <div className="container-custom mx-auto relative z-10 px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-7 md:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold mb-4 sm:mb-5 md:mb-6">
              Ready to Partner With Us?
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-4 sm:mb-5 md:mb-6"
              style={{ maxWidth: "200px" }}
            />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-7 md:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              We'd love to discuss how we can create a partnership that meets your goals while supporting our mission.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 max-w-xl mx-auto shadow-lg transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold text-center sm:text-left">
              Contact Our Partnership Team
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base text-center sm:text-left">
              For more information about partnership opportunities, please reach out to our team at:
            </p>
            <p className="text-colorstack-gold text-center font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              colorstack.grambling@gmail.com
            </p>
            <div className="mt-4 sm:mt-6 text-center">
              <a 
                href="mailto:colorstack.grambling@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-colorstack-gold hover:bg-white text-black font-medium py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-colorstack-gold/20 hover:translate-y-[-2px] duration-300 text-sm sm:text-base w-full sm:w-auto"
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

export default Partnerships;

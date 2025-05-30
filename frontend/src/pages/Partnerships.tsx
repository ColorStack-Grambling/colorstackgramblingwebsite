
import PublicLayout from "../components/Layout/PublicLayout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Partnerships = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-black pt-36 pb-16">
        <div className="container-custom mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-colorstack-gold mb-6">
            Partnerships & Sponsorships
          </motion.h1>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "200px" }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6" style={{ maxWidth: "200px" }} />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} viewport={{ once: true }} className="text-xl text-white/90 max-w-2xl mx-auto">
            Support the next generation of Black and Latinx tech talent and connect with promising students.
          </motion.p>
        </div>
      </section>
      
      {/* Why Partner */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
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
                className="pb-12 md:pb-12"
              >
                <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold mb-3">
                  Why Partner With Us?
                </h2>
              </motion.div>
              <p className="text-white/80 mb-4">
                When you partner with GSU ColorStack, you're investing in the future of tech. Our members are talented, 
                motivated students from underrepresented backgrounds who are eager to make their mark in the technology industry.
              </p>
              <p className="text-white/80 mb-4">
                Through your support, you'll help provide critical resources for our programming, while also gaining 
                access to a diverse pool of promising talent for internships and full-time positions.
              </p>
              <p className="text-white/80">
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
                <div className="absolute w-8 h-8 bg-colorstack-gold rounded-full -top-4 -left-2 animate-pulse z-10"></div>
                <div className="absolute w-4 h-4 bg-colorstack-gold rounded-full top-8 -left-6 animate-bounce z-10"></div>
                <div className="absolute w-9 h-9 bg-colorstack-gold rounded-full -bottom-4 -right-2 animate-pulse z-10"></div>
                <div className="absolute w-5 h-5 bg-colorstack-gold rounded-full -bottom-6 right-12 animate-float z-10"></div>
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
        <div className="container-custom mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold text-center mb-3">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-xl font-bold mb-4 text-colorstack-gold">Sponsor an Event</h3>
              <p className="text-white/80 mb-4">
                Support technical workshops, hackathons, career panels, and networking events that help our 
                members develop skills and make industry connections.
              </p>
              <p className="text-white/80">
                Event sponsors receive recognition in all event promotions, the opportunity to speak or present 
                at the event, and direct engagement with attendees.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-xl font-bold mb-4 text-colorstack-gold">Mentorship Program</h3>
              <p className="text-white/80 mb-4">
                Connect your employees with our members for one-on-one or group mentorship. This provides valuable 
                guidance to students while allowing your team to give back.
              </p>
              <p className="text-white/80">
                Mentorship can be structured around technical skills, career guidance, or project-based learning.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-xl font-bold mb-4 text-colorstack-gold">Technical Workshops</h3>
              <p className="text-white/80 mb-4">
                Host a workshop where your engineers can share their expertise with our members, covering topics 
                like software development, data science, cybersecurity, or emerging technologies.
              </p>
              <p className="text-white/80">
                These workshops provide valuable learning opportunities for students while showcasing your company's technical excellence.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-xl font-bold mb-4 text-colorstack-gold">Recruitment Pipeline</h3>
              <p className="text-white/80 mb-4">
                Gain early access to talented students for internships and full-time positions. We can help 
                connect you with members who match your hiring needs.
              </p>
              <p className="text-white/80">
                Partners receive priority at our career events and can post opportunities directly to our member network.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-black relative overflow-hidden">
        
        <div className="container-custom mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold mb-6">Ready to Partner With Us?</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-6"
              style={{ maxWidth: "200px" }}
            />
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We'd love to discuss how we can create a partnership that meets your goals while supporting our mission.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-8 max-w-xl mx-auto shadow-lg transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
          >
            <h3 className="text-xl font-bold mb-4 text-colorstack-gold">Contact Our Partnership Team</h3>
            <p className="text-white/80 mb-6">
              For more information about partnership opportunities, please reach out to our team at:
            </p>
            <p className="text-colorstack-gold text-center font-semibold mb-4">
              colorstack.grambling@gmail.com
            </p>
            <div className="mt-6 text-center">
              <a 
                href="mailto:colorstack.grambling@gmail.com"
                className="inline-flex items-center gap-2 bg-colorstack-gold hover:bg-white text-black font-medium py-3 px-8 rounded-md transition-all shadow-md hover:shadow-lg hover:shadow-colorstack-gold/20 hover:translate-y-[-2px] duration-300"
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

export default Partnerships;

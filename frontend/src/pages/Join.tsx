import PublicLayout from "../components/Layout/PublicLayout";
import JoinForm from "../components/Forms/JoinForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-black min-h-[50vh] flex items-center pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12">
        <div className="container-custom mx-auto py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 0.2 }} 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 text-center"
            >
              Become Part of
            </motion.h1>
            <motion.h1 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1, type: "spring", stiffness: 100 }} 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-colorstack-gold mb-4 sm:mb-5 md:mb-6 pb-2 text-center"
            >
              ColorStack Grambling
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
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto text-center px-4 sm:px-0"
            >
              Join a community that supports Black and Latinx students in tech at Grambling State University.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Why Join Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-colorstack-gold rounded-full top-8 sm:top-12 left-8 sm:left-12 animate-pulse z-10"></div>
        <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-colorstack-gold rounded-full top-16 sm:top-24 left-12 sm:left-20 animate-bounce z-10"></div>
        <div className="absolute w-5 h-5 sm:w-7 sm:h-7 bg-colorstack-gold rounded-full bottom-10 sm:bottom-16 right-8 sm:right-14 animate-pulse z-10"></div>
        {/* Background Blur Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-colorstack-gold blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-colorstack-gold blur-3xl"></div>
        </div>
        
        <div className="container-custom mx-auto relative z-10 px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold text-center mb-3">
              Why Join ColorStack?
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-4 sm:mb-5 md:mb-6"
              style={{ maxWidth: "200px" }}
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold">Community Support</h3>
              <p className="text-white/80 text-sm sm:text-base">
                Connect with peers who share similar backgrounds and experiences. 
                Build relationships that will support you through your academic journey and beyond.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold">Technical Growth</h3>
              <p className="text-white/80 text-sm sm:text-base">
                Participate in workshops, hackathons, and projects that build your technical skills 
                and give you hands-on experience with relevant technologies.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-black backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-colorstack-gold">Career Opportunities</h3>
              <p className="text-white/80 text-sm sm:text-base">
                Gain access to internships, job postings, resume reviews, mock interviews, and 
                connections with companies seeking diverse talent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Membership Benefits */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="container-custom mx-auto px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold text-center mb-3">
              Membership Benefits
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-4 sm:mb-5 md:mb-6"
              style={{ maxWidth: "200px" }}
            />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative animate-slow-float"
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
            >
              <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-colorstack-gold rounded-full -top-2 sm:-top-4 -left-1 sm:-left-2 animate-pulse z-10"></div>
              <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-colorstack-gold rounded-full top-6 sm:top-8 -left-3 sm:-left-6 animate-bounce z-10"></div>
              <div className="absolute w-7 h-7 sm:w-9 sm:h-9 bg-colorstack-gold rounded-full -bottom-2 sm:-bottom-4 -right-1 sm:-right-2 animate-pulse z-10"></div>
              <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-colorstack-gold rounded-full -bottom-3 sm:-bottom-6 right-8 sm:right-12 animate-float z-10"></div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E22AQEMFEWOMddYAA/feedshare-shrink_2048_1536/B4EZPiVYf4HsAo-/0/1734669078132?e=1751500800&v=beta&t=Q6kP0HzVHrfS3TUh6hC_XjhMkwpPaNqnGkPSZFPU5Sk" 
                  alt="ColorStack members" 
                  className="rounded-lg shadow-md w-full"
                />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="text-colorstack-gold mr-2 font-bold text-lg sm:text-xl">•</span>
                  <span>
                    <strong className="text-white font-bold text-sm sm:text-base">Exclusive Events</strong>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">Access to member-only workshops, study sessions, and networking opportunities.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-gold mr-2 font-bold text-lg sm:text-xl">•</span>
                  <span>
                    <strong className="text-white font-bold text-sm sm:text-base">Mentorship</strong>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">One-on-one mentorship with industry professionals and senior students.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-gold mr-2 font-bold text-lg sm:text-xl">•</span>
                  <span>
                    <strong className="text-white font-bold text-sm sm:text-base">Resume Database</strong>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">Your profile shared with partner companies looking to diversify their talent pipeline.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-gold mr-2 font-bold text-lg sm:text-xl">•</span>
                  <span>
                    <strong className="text-white font-bold text-sm sm:text-base">Leadership Opportunities</strong>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">Chances to lead projects, events, and initiatives within the chapter.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-gold mr-2 font-bold text-lg sm:text-xl">•</span>
                  <span>
                    <strong className="text-white font-bold text-sm sm:text-base">National Network</strong>
                    <p className="text-white/80 text-xs sm:text-sm md:text-base">Connection to the broader ColorStack community at universities nationwide.</p>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="section-padding bg-black relative overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-colorstack-gold rounded-full top-12 sm:top-20 left-8 sm:left-16 animate-pulse z-10"></div>
        <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-colorstack-gold rounded-full top-20 sm:top-36 left-12 sm:left-24 animate-bounce z-10"></div>
        <div className="absolute w-5 h-5 sm:w-7 sm:h-7 bg-colorstack-gold rounded-full bottom-12 sm:bottom-20 right-8 sm:right-16 animate-pulse z-10"></div>
        <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-colorstack-gold rounded-full bottom-20 sm:bottom-36 right-16 sm:right-28 animate-float z-10"></div>
        
        {/* Background Blur Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-colorstack-gold blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-colorstack-gold blur-3xl"></div>
        </div>
        
        <div className="container-custom mx-auto relative z-10 px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold text-center mb-3">
              Apply to Join
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-4 sm:mb-5 md:mb-6"
              style={{ maxWidth: "200px" }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 max-w-3xl mx-auto shadow-lg transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
          >
            <JoinForm />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 sm:mt-8 text-center text-white/80 max-w-2xl mx-auto px-4 sm:px-0"
          >
            <p className="text-sm sm:text-base">
              After submitting your application, you'll receive an email confirmation. Our team will review 
              your application and respond within 1 week with next steps.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-colorstack-gold blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-colorstack-gold blur-3xl"></div>
        </div>
        <div className="container-custom mx-auto relative z-10 px-4 sm:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-colorstack-gold text-center mb-3">
              What Our Members Say
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-colorstack-gold mx-auto rounded-full mb-4 sm:mb-5 md:mb-6"
              style={{ maxWidth: "200px" }}
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <p className="italic text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                "Joining ColorStack was the best decision I made in college. I found a community that understood 
                my challenges and celebrated my wins. The technical workshops and career prep helped me land my 
                dream internship at Google."
              </p>
              <p className="font-bold text-colorstack-gold text-sm sm:text-base">- Maya J., Computer Science Junior</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm rounded-2xl border border-colorstack-gold/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(234,170,0,0.3)] hover:border-colorstack-gold/80"
            >
              <p className="italic text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                "Before ColorStack, I was the only Latinx student in most of my CS classes. Now I have a support 
                system of peers who help me navigate both technical challenges and career opportunities. The mentorship 
                has been invaluable."
              </p>
              <p className="font-bold text-colorstack-gold text-sm sm:text-base">- Carlos M., Information Systems Senior</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Join;

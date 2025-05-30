import PublicLayout from "../components/Layout/PublicLayout";
import MemberSpotlight from "../components/Members/MemberSpotlight";
import { members, leaders } from "../utils/mockData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = members.slice(2);

  return (
    <PublicLayout>
      {/* About Us Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 pt-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold mb-3">
              About Us
            </h2>
            <div className="h-1 bg-colorstack-gold mx-auto rounded-full" style={{ maxWidth: "200px" }} />
          </motion.div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            ColorStack Grambling is a student-led chapter of the national ColorStack organization, committed to empowering Black and Latinx students in computing at Grambling State University. We exist to create a supportive community where students of color can thrive academically, professionally, and personally in tech.
          </p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            At Grambling, we’re building more than just a network—we’re creating a movement. Through community events, coding workshops, industry panels, and career support, we aim to close the gap in tech representation by equipping our members with the tools, mentorship, and confidence they need to succeed.
          </p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Whether you're a freshman exploring computer science for the first time or a senior preparing for industry opportunities, ColorStack Grambling is here to help you navigate your journey and find your place in tech.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold mb-3">
              Our Values
            </h2>
            <div className="h-1 bg-colorstack-gold mx-auto rounded-full" style={{ maxWidth: "200px" }} />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Community', 'Excellence', 'Inclusion'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-colorstack-gold rounded-2xl border border-colorstack-gold/30 p-8 transition-all duration-300 hover:translate-y-[-2px] clickable hover:shadow-[0_0_15px_rgba(234,170,0,0.3)]"
              >
                <h3 className="text-xl font-bold mb-4">{value}</h3>
                <p className="text-black">
                  {value === 'Community' && 'We believe in the power of community to support, encourage, and inspire.'}
                  {value === 'Excellence' && 'We pursue excellence in everything we do, challenging ourselves to reach our highest potential.'}
                  {value === 'Inclusion' && 'We are committed to creating an inclusive environment where all members feel welcome and valued.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding" id="leadership">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-colorstack-gold mb-3">
              Our Leadership
            </h2>
            <div className="h-1 bg-colorstack-gold mx-auto rounded-full" style={{ maxWidth: "200px" }} />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {leaders.slice(0, 2).map((leader, index) => (
              <MemberSpotlight
                key={index}
                member={{
                  id: index,
                  name: (
                    <span className="flex items-center gap-2">
                      {leader.name}
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-colorstack-gold hover:text-white transition-colors"
                      >
                        <i className="fab fa-linkedin text-2xl"></i>
                      </a>
                    </span>
                  ),
                  role: leader.position,
                  bio: `${leader.classification} - ${leader.major}`,
                  image: leader.image,
                  achievements: [],
                  featured: false,
                }}
                featured={false}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-3xl font-bold text-colorstack-gold mb-3">
              Team Members
            </h2>
            <div className="h-1 bg-colorstack-gold mx-auto rounded-full" style={{ maxWidth: "200px" }} />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.slice(2).map((leader, index) => (
              <MemberSpotlight
                key={index}
                member={{
                  id: index + 2,
                  name: (
                    <span className="flex items-center gap-2">
                      {leader.name}
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-colorstack-gold hover:text-white transition-colors"
                      >
                        <i className="fab fa-linkedin text-2xl"></i>
                      </a>
                    </span>
                  ),
                  role: leader.position,
                  bio: `${leader.classification} - ${leader.major}`,
                  image: leader.image,
                  achievements: [],
                  featured: false,
                }}
                featured={false}
              />
            ))}
          </div>
        </div>
      </section>
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
              <a href="mailto:colorstack@gram.edu" className="mt-auto bg-transparent border-2 border-colorstack-gold text-colorstack-gold hover:border-white hover:text-white font-medium py-3 px-8 rounded-md transition-all duration-300 hover:translate-y-[-2px]">
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;

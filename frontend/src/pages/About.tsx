
import PublicLayout from "../components/Layout/PublicLayout";
import MemberSpotlight from "../components/Members/MemberSpotlight";
import { members } from "../utils/mockData";

const About = () => {
  // Team leaders - first 2 members
  const leaders = members.slice(0, 2);
  
  // Other team members
  const teamMembers = members.slice(2);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-colorstack-blue py-16">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Learn about GSU ColorStack's mission, values, and the team making it all happen.
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                GSU ColorStack's mission is to increase the number of Black and Latinx computer science graduates 
                who go on to start rewarding careers in tech. We aim to build a supportive community that empowers 
                underrepresented students to thrive academically and professionally.
              </p>
              <p className="text-gray-700">
                We believe that diversity in tech isn't just a goal—it's a necessity. By fostering an inclusive 
                community at GSU, we're helping to build a future where the tech industry better reflects the 
                diversity of our world.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We envision a world where Black and Latinx students have equal access to opportunities in tech,
                and where the barriers to entry that have historically existed are dismantled.
              </p>
              <p className="text-gray-700">
                Through mentorship, technical workshops, career development, and community building, we're working 
                to create a pipeline of talented underrepresented students who are prepared to excel in the tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-700">
                We believe in the power of community to support, encourage, and inspire. 
                Our chapter provides a space where students can connect, collaborate, and grow together.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We pursue excellence in everything we do, challenging ourselves and each other to 
                reach our highest potential in academics, leadership, and professional development.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Inclusion</h3>
              <p className="text-gray-700">
                We are committed to creating an inclusive environment where all members feel welcome, 
                valued, and empowered to contribute their unique perspectives and talents.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chapter History */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="/placeholder.svg" 
                alt="ColorStack founding members" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-gray-700 mb-4">
                GSU ColorStack was founded in 2022 by a group of passionate computer science students who recognized 
                the need for greater representation and support for Black and Latinx students in tech fields.
              </p>
              <p className="text-gray-700 mb-4">
                Starting with just a handful of members, our chapter has grown to become a vibrant community 
                that offers mentorship, technical workshops, hackathons, and professional networking opportunities.
              </p>
              <p className="text-gray-700">
                As part of the national ColorStack organization, we're connected to a broader network of chapters 
                at universities across the country, allowing us to share resources and opportunities with our members.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {leaders.map((member) => (
              <MemberSpotlight key={member.id} member={member} />
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-8 text-center">Team Members</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <MemberSpotlight key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default About;

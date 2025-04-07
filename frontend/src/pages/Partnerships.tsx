
import PublicLayout from "../components/Layout/PublicLayout";
import { Link } from "react-router-dom";

const Partnerships = () => {
  const sponsorshipLevels = [
    {
      title: "Platinum",
      amount: "$5,000+",
      benefits: [
        "Premium logo placement on website and all event materials",
        "Featured sponsor at major chapter events",
        "Dedicated recruitment/networking session with members",
        "5 social media highlights per year",
        "Option to host a technical workshop",
        "Recognition in all chapter communications"
      ],
      recommended: true
    },
    {
      title: "Gold",
      amount: "$2,500+",
      benefits: [
        "Logo on website and event materials",
        "Opportunity to speak at one chapter event",
        "3 social media highlights per year",
        "Recruitment booth at career events",
        "Recognition in chapter newsletters"
      ],
      recommended: false
    },
    {
      title: "Silver",
      amount: "$1,000+",
      benefits: [
        "Logo on website",
        "1 social media highlight per year",
        "Participation in career networking events",
        "Recognition at chapter events"
      ],
      recommended: false
    },
    {
      title: "Bronze",
      amount: "$500+",
      benefits: [
        "Listed as sponsor on website",
        "Recognition at chapter events",
        "Invitation to annual sponsor appreciation event"
      ],
      recommended: false
    }
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-colorstack-purple py-16">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partnerships & Sponsorships</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Support the next generation of Black and Latinx tech talent and connect with promising students.
          </p>
        </div>
      </section>
      
      {/* Why Partner */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Partner With Us</h2>
              <p className="text-gray-700 mb-4">
                When you partner with GSU ColorStack, you're investing in the future of tech. Our members are talented, 
                motivated students from underrepresented backgrounds who are eager to make their mark in the technology industry.
              </p>
              <p className="text-gray-700 mb-4">
                Through your support, you'll help provide critical resources for our programming, while also gaining 
                access to a diverse pool of promising talent for internships and full-time positions.
              </p>
              <p className="text-gray-700">
                Our partnerships are designed to be mutually beneficial, offering companies various ways to engage 
                with our community while helping students build the skills and connections they need to succeed.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/placeholder.svg" 
                alt="Industry professionals networking with students" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Opportunities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Partnership Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Sponsor an Event</h3>
              <p className="text-gray-700 mb-4">
                Support technical workshops, hackathons, career panels, and networking events that help our 
                members develop skills and make industry connections.
              </p>
              <p className="text-gray-700">
                Event sponsors receive recognition in all event promotions, the opportunity to speak or present 
                at the event, and direct engagement with attendees.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Mentorship Program</h3>
              <p className="text-gray-700 mb-4">
                Connect your employees with our members for one-on-one or group mentorship. This provides valuable 
                guidance to students while allowing your team to give back.
              </p>
              <p className="text-gray-700">
                Mentorship can be structured around technical skills, career guidance, or project-based learning.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Technical Workshops</h3>
              <p className="text-gray-700 mb-4">
                Host a workshop where your engineers can share their expertise with our members, covering topics 
                like software development, data science, cybersecurity, or emerging technologies.
              </p>
              <p className="text-gray-700">
                These workshops provide valuable learning opportunities for students while showcasing your company's technical excellence.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Recruitment Pipeline</h3>
              <p className="text-gray-700 mb-4">
                Gain early access to talented students for internships and full-time positions. We can help 
                connect you with members who match your hiring needs.
              </p>
              <p className="text-gray-700">
                Partners receive priority at our career events and can post opportunities directly to our member network.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sponsorship Levels */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Sponsorship Levels</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {sponsorshipLevels.map((level) => (
              <div 
                key={level.title} 
                className={`rounded-lg border ${level.recommended 
                  ? 'border-colorstack-purple shadow-lg' 
                  : 'border-gray-200'} p-6 h-full flex flex-col`}
              >
                {level.recommended && (
                  <div className="mb-3">
                    <span className="bg-colorstack-purple text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                <p className="text-2xl font-bold text-colorstack-purple mb-4">{level.amount}</p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {level.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-colorstack-purple mr-2">•</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full text-center py-2 px-4 rounded-md font-medium ${level.recommended 
                    ? 'btn-primary' 
                    : 'border border-colorstack-purple text-colorstack-purple hover:bg-colorstack-light/20'}`}
                >
                  Become a Sponsor
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-colorstack-dark">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We'd love to discuss how we can create a partnership that meets your goals while supporting our mission.
          </p>
          <div className="bg-white rounded-lg p-8 max-w-xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contact Our Partnership Team</h3>
            <p className="text-gray-700 mb-6">
              For more information about partnership opportunities, please reach out to our team at:
            </p>
            <div className="text-colorstack-purple font-medium text-lg mb-6">
              partnerships@gsucolorstack.org
            </div>
            <p className="text-gray-700 text-sm">
              We'll respond to your inquiry within 2 business days to schedule a conversation about partnership possibilities.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Partnerships;

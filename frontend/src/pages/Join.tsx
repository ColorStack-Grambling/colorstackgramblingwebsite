
import PublicLayout from "../components/Layout/PublicLayout";
import JoinForm from "../components/Forms/JoinForm";

const Join = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-colorstack-purple py-16">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join ColorStack</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Become part of a community that supports Black and Latinx students in tech at GSU.
          </p>
        </div>
      </section>
      
      {/* Why Join Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Join ColorStack?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Community Support</h3>
              <p className="text-gray-700">
                Connect with peers who share similar backgrounds and experiences. 
                Build relationships that will support you through your academic journey and beyond.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Technical Growth</h3>
              <p className="text-gray-700">
                Participate in workshops, hackathons, and projects that build your technical skills 
                and give you hands-on experience with relevant technologies.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
              <p className="text-gray-700">
                Gain access to internships, job postings, resume reviews, mock interviews, and 
                connections with companies seeking diverse talent.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Membership Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img
                src="/placeholder.svg" 
                alt="ColorStack members" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Membership Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-colorstack-purple mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-gray-900">Exclusive Events</strong>
                    <p className="text-gray-700">Access to member-only workshops, study sessions, and networking opportunities.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-purple mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-gray-900">Mentorship</strong>
                    <p className="text-gray-700">One-on-one mentorship with industry professionals and senior students.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-purple mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-gray-900">Resume Database</strong>
                    <p className="text-gray-700">Your profile shared with partner companies looking to diversify their talent pipeline.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-purple mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-gray-900">Leadership Opportunities</strong>
                    <p className="text-gray-700">Chances to lead projects, events, and initiatives within the chapter.</p>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-colorstack-purple mr-2 font-bold">•</span>
                  <span>
                    <strong className="text-gray-900">National Network</strong>
                    <p className="text-gray-700">Connection to the broader ColorStack community at universities nationwide.</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Apply to Join</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <JoinForm />
          </div>
          
          <div className="mt-8 text-center text-gray-700 max-w-2xl mx-auto">
            <p>
              After submitting your application, you'll receive an email confirmation. Our team will review 
              your application and respond within 1-2 weeks with next steps, including an invitation to our 
              orientation session.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-colorstack-dark text-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Members Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-4">
                "Joining ColorStack was the best decision I made in college. I found a community that understood 
                my challenges and celebrated my wins. The technical workshops and career prep helped me land my 
                dream internship at Google."
              </p>
              <p className="font-bold">- Maya J., Computer Science Junior</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <p className="italic mb-4">
                "Before ColorStack, I was the only Latinx student in most of my CS classes. Now I have a support 
                system of peers who help me navigate both technical challenges and career opportunities. The mentorship 
                has been invaluable."
              </p>
              <p className="font-bold">- Carlos M., Information Systems Senior</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Join;

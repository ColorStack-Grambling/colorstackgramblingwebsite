
import { useState, useEffect } from "react";
import PublicLayout from "../components/Layout/PublicLayout";
import RegistrationForm from "../components/Forms/RegistrationForm";
import { events } from "../utils/mockData";
import { useSearchParams, Link } from "react-router-dom";

const Register = () => {
  const [searchParams] = useSearchParams();
  const [eventData, setEventData] = useState<{id: string, name: string} | null>(null);
  
  useEffect(() => {
    const eventId = searchParams.get("event");
    
    if (eventId) {
      const event = events.find(e => e.id.toString() === eventId);
      if (event) {
        setEventData({
          id: eventId,
          name: event.title
        });
      }
    }
  }, [searchParams]);

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="bg-colorstack-blue py-12">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {eventData ? `Register for: ${eventData.name}` : "Event Registration"}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Complete the form below to reserve your spot at this event.
          </p>
        </div>
      </section>
      
      {/* Registration Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          {!eventData ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Select an Event to Register</h2>
              <p className="text-gray-700 mb-8">
                Please select an event from our events page to register.
              </p>
              <Link to="/events" className="btn-primary">
                Browse Events
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
              <RegistrationForm eventId={eventData.id} eventName={eventData.name} />
            </div>
          )}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="card-highlight">
              <h3 className="text-lg font-bold mb-2">Is registration free?</h3>
              <p className="text-gray-700">
                Yes, all ColorStack events are free for students to attend.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-lg font-bold mb-2">Do I need to be a ColorStack member to attend?</h3>
              <p className="text-gray-700">
                Most events are open to all GSU students interested in tech and computing, regardless of membership status.
                Some specialized events may be member-only, which will be clearly indicated.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-lg font-bold mb-2">What if I can no longer attend?</h3>
              <p className="text-gray-700">
                If you're unable to attend an event you've registered for, please email us at events@gsucolorstack.org 
                to cancel your registration so we can make your spot available to others.
              </p>
            </div>
            
            <div className="card-highlight">
              <h3 className="text-lg font-bold mb-2">Will food be provided?</h3>
              <p className="text-gray-700">
                Food is typically provided for events longer than 2 hours. The event description will specify if food 
                will be available, and we collect dietary restrictions during registration to accommodate needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Register;

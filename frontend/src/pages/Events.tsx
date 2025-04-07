
import { useState, useMemo } from "react";
import PublicLayout from "../components/Layout/PublicLayout";
import EventCard from "../components/Events/EventCard";
import { events } from "../utils/mockData";

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
      <section className="bg-colorstack-blue py-16">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Events</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join us for workshops, networking opportunities, and more to build your skills and community.
          </p>
        </div>
      </section>
      
      {/* Events Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          {/* Filter Controls */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filter === "all"
                    ? "bg-colorstack-gold text-colorstack-black"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } border border-gray-200`}
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
                } border-t border-b border-gray-200`}
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
                } border border-gray-200`}
                onClick={() => setFilter("past")}
              >
                Past ({pastCount})
              </button>
            </div>
          </div>
          
          {/* Events List */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-xl text-gray-600">No events found for the selected filter.</p>
              <button
                onClick={() => setFilter("all")}
                className="mt-4 text-colorstack-blue hover:underline"
              >
                View all events
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Host Event CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Want to Host an Event with Us?</h2>
                <p className="text-gray-700 mb-6">
                  If you're a company, organization, or individual interested in hosting a workshop, 
                  tech talk, or other event with GSU ColorStack, we'd love to collaborate with you.
                </p>
                <a 
                  href="mailto:events@gsucolorstack.org"
                  className="btn-primary inline-flex"
                >
                  Contact Our Events Team
                </a>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="/placeholder.svg" 
                  alt="Collaborative event" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Events;

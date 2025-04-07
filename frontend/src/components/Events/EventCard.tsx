
import { Event } from "../../utils/mockData";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className={`card-highlight flex flex-col h-full ${event.isPast ? 'opacity-75' : ''}`}>
      {event.image && (
        <div className="mb-4">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      )}
      
      <div className="flex-1">
        {event.isPast && (
          <div className="mb-2">
            <span className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
              Past Event
            </span>
          </div>
        )}
        {!event.isPast && (
          <div className="mb-2">
            <span className="text-xs font-medium bg-colorstack-purple/10 text-colorstack-purple px-2 py-1 rounded-full">
              Upcoming
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
        <p className="text-gray-700 mb-4 text-sm">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-start">
            <Calendar size={16} className="mr-2 text-colorstack-purple flex-shrink-0 mt-1" />
            <span className="text-sm">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-start">
            <Clock size={16} className="mr-2 text-colorstack-purple flex-shrink-0 mt-1" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 text-colorstack-purple flex-shrink-0 mt-1" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
      </div>
      
      {!event.isPast && (
        <div className="mt-auto pt-4">
          <Link 
            to={`/register?event=${event.id}`} 
            className="btn-primary w-full text-center"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default EventCard;

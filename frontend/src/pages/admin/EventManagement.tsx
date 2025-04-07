
import { useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import EventForm from "../../components/Admin/EventForm";
import { Event, events as mockEvents } from "../../utils/mockData";
import { Calendar, Clock, MapPin, Edit, Trash2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EventManagement = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const handleAddEvent = () => {
    setSelectedEvent(null);
    setIsCreating(true);
  };
  
  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event);
    setIsCreating(false);
  };
  
  const handleDeleteEvent = (eventId: number) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(event => event.id !== eventId));
      
      toast({
        title: "Event deleted",
        description: "The event has been successfully deleted.",
        variant: "default",
      });
    }
  };
  
  const handleFormSubmit = (eventData: Omit<Event, "id" | "isPast">) => {
    if (selectedEvent) {
      // Update existing event
      const updated = events.map(event => 
        event.id === selectedEvent.id
          ? { 
              ...event, 
              ...eventData, 
              isPast: new Date(eventData.date) < new Date() 
            }
          : event
      );
      
      setEvents(updated);
      
      toast({
        title: "Event updated",
        description: "The event has been successfully updated.",
        variant: "default",
      });
    } else {
      // Create new event
      const newEvent: Event = {
        id: Math.max(0, ...events.map(e => e.id)) + 1,
        ...eventData,
        isPast: new Date(eventData.date) < new Date()
      };
      
      setEvents([...events, newEvent]);
      
      toast({
        title: "Event created",
        description: "The new event has been successfully created.",
        variant: "default",
      });
    }
    
    setSelectedEvent(null);
    setIsCreating(false);
  };
  
  const handleFormCancel = () => {
    setSelectedEvent(null);
    setIsCreating(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Event Management</h1>
          <button
            onClick={handleAddEvent}
            className="btn-primary flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Add New Event
          </button>
        </div>
        
        {isCreating || selectedEvent ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">
              {isCreating ? "Create New Event" : "Edit Event"}
            </h2>
            <EventForm 
              event={selectedEvent || undefined} 
              onSubmit={handleFormSubmit} 
              onCancel={handleFormCancel} 
            />
          </div>
        ) : (
          <>
            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-colorstack-purple text-white px-6 py-3">
                <h2 className="font-bold">Upcoming Events</h2>
              </div>
              <div className="divide-y">
                {events.filter(event => !event.isPast).length > 0 ? (
                  events
                    .filter(event => !event.isPast)
                    .map((event) => (
                      <div key={event.id} className="p-6 flex flex-col md:flex-row gap-6">
                        {event.image && (
                          <div className="md:w-1/4">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-32 object-cover rounded-md"
                            />
                          </div>
                        )}
                        <div className={event.image ? "md:w-2/4" : "md:w-3/4"}>
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <p className="text-gray-600 mt-1 text-sm line-clamp-2">{event.description}</p>
                          <div className="mt-3 space-y-1">
                            <div className="flex items-center text-sm">
                              <Calendar size={14} className="text-colorstack-purple mr-2" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock size={14} className="text-colorstack-purple mr-2" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <MapPin size={14} className="text-colorstack-purple mr-2" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/4 flex md:flex-col flex-row justify-end md:items-end gap-2">
                          <button
                            onClick={() => handleEditEvent(event)}
                            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
                          >
                            <Edit size={18} />
                            <span className="sr-only">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="p-2 border border-red-300 rounded-md hover:bg-red-50 text-red-600"
                          >
                            <Trash2 size={18} />
                            <span className="sr-only">Delete</span>
                          </button>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="p-6 text-center text-gray-600">
                    No upcoming events. Click "Add New Event" to create one.
                  </div>
                )}
              </div>
            </div>
            
            {/* Past Events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-700 text-white px-6 py-3">
                <h2 className="font-bold">Past Events</h2>
              </div>
              <div className="divide-y">
                {events.filter(event => event.isPast).length > 0 ? (
                  events
                    .filter(event => event.isPast)
                    .map((event) => (
                      <div key={event.id} className="p-6 flex flex-col md:flex-row gap-6">
                        {event.image && (
                          <div className="md:w-1/4">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-32 object-cover rounded-md opacity-70"
                            />
                          </div>
                        )}
                        <div className={event.image ? "md:w-2/4" : "md:w-3/4"}>
                          <h3 className="text-lg font-semibold text-gray-700">{event.title}</h3>
                          <p className="text-gray-600 mt-1 text-sm line-clamp-2">{event.description}</p>
                          <div className="mt-3 space-y-1">
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar size={14} className="text-gray-500 mr-2" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock size={14} className="text-gray-500 mr-2" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin size={14} className="text-gray-500 mr-2" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/4 flex md:flex-col flex-row justify-end md:items-end gap-2">
                          <button
                            onClick={() => handleEditEvent(event)}
                            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700"
                          >
                            <Edit size={18} />
                            <span className="sr-only">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="p-2 border border-red-300 rounded-md hover:bg-red-50 text-red-600"
                          >
                            <Trash2 size={18} />
                            <span className="sr-only">Delete</span>
                          </button>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="p-6 text-center text-gray-600">
                    No past events.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default EventManagement;

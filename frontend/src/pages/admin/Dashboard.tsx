
import { useState, useMemo } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import { Link } from "react-router-dom";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { members, events } from "../../utils/mockData";

const Dashboard = () => {
  // Get counts
  const featuredMember = useMemo(() => members.find(member => member.featured), []);
  const upcomingEventsCount = useMemo(() => events.filter(event => !event.isPast).length, []);
  const totalMembersCount = useMemo(() => members.length, []);
  
  // Get next 3 upcoming events
  const upcomingEvents = useMemo(() => 
    events
      .filter(event => !event.isPast)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 3), 
  []);
  
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
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-colorstack-purple/10 text-colorstack-purple mr-4">
                <Calendar size={24} />
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Upcoming Events</h2>
                <p className="text-2xl font-bold">{upcomingEventsCount}</p>
              </div>
            </div>
            <Link to="/admin/events" className="mt-4 text-sm text-colorstack-purple hover:underline flex items-center">
              Manage Events <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-colorstack-purple/10 text-colorstack-purple mr-4">
                <Users size={24} />
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Total Members</h2>
                <p className="text-2xl font-bold">{totalMembersCount}</p>
              </div>
            </div>
            <Link to="/admin/spotlight" className="mt-4 text-sm text-colorstack-purple hover:underline flex items-center">
              Manage Members <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div>
              <h2 className="text-sm font-medium text-gray-500">Featured Member</h2>
              {featuredMember ? (
                <div className="mt-2">
                  <p className="font-bold">{featuredMember.name}</p>
                  <p className="text-sm text-gray-600">{featuredMember.role}</p>
                </div>
              ) : (
                <p className="mt-2 text-gray-600">No featured member set</p>
              )}
            </div>
            <Link to="/admin/spotlight" className="mt-4 text-sm text-colorstack-purple hover:underline flex items-center">
              Update Spotlight <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
        
        {/* Quick Access Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-colorstack-purple text-white px-6 py-4">
              <h2 className="font-bold">Upcoming Events</h2>
            </div>
            <div className="p-6">
              {upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(event.date)} • {event.time}</span>
                      </div>
                    </div>
                  ))}
                  
                  <Link to="/admin/events" className="mt-2 text-sm text-colorstack-purple hover:underline flex items-center">
                    View All Events <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              ) : (
                <p className="text-gray-600">No upcoming events scheduled.</p>
              )}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-colorstack-purple text-white px-6 py-4">
              <h2 className="font-bold">Quick Actions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <Link 
                  to="/admin/events" 
                  className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="font-semibold">Create New Event</div>
                  <div className="text-sm text-gray-600 mt-1">Add a new event to the calendar</div>
                </Link>
                
                <Link 
                  to="/admin/spotlight" 
                  className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="font-semibold">Update Member Spotlight</div>
                  <div className="text-sm text-gray-600 mt-1">Change the featured member on the homepage</div>
                </Link>
                
                <a 
                  href="/events" 
                  target="_blank" 
                  className="block p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="font-semibold">View Public Site</div>
                  <div className="text-sm text-gray-600 mt-1">See how changes look on the live site</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

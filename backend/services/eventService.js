const Event = require('../models/Event');

// Service to add a new event
exports.addEvent = async (eventData) => {
    const event = new Event(eventData);
    return await event.save();
};

// Service to edit an existing event
exports.editEvent = async (eventId, eventData) => {
    return await Event.findByIdAndUpdate(eventId, eventData, { new: true });
};

// Service to delete an event
exports.deleteEvent = async (eventId) => {
    return await Event.findByIdAndDelete(eventId);
};

// Service to get all events
exports.getAllEvents = async () => {
    return await Event.find();
};

// Service to get a single event by ID
exports.getEventById = async (eventId) => {
    return await Event.findById(eventId);
};
const Event = require('../models/Event');
const User = require('../models/User');
const { sendEventRegistrationEmail } = require('./emailService');

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

// Service to register a user for an event
exports.registerForEvent = async (eventId, userId) => {
    try {
        const event = await Event.findById(eventId);
        if (!event) {
            throw new Error('Event not found');
        }

        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // Check if user is already registered
        if (event.registeredUsers.includes(userId)) {
            throw new Error('User already registered for this event');
        }

        // Add user to event's registered users
        event.registeredUsers.push(userId);
        await event.save();

        // Add event to user's events
        user.events.push(eventId);
        await user.save();

        // Send confirmation email
        await sendEventRegistrationEmail(user.email, event);

        return event;
    } catch (error) {
        throw error;
    }
};
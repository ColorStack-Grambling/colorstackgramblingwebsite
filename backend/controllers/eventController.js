const EventService = require('../services/eventService');

// Controller to handle adding a new event
exports.addEvent = async (req, res) => {
    try {
        const event = await EventService.addEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle editing an existing event
exports.editEvent = async (req, res) => {
    try {
        const event = await EventService.editEvent(req.params.id, req.body);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle deleting an event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await EventService.deleteEvent(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle retrieving all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await EventService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle retrieving a single event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await EventService.getEventById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to handle event registration
exports.registerForEvent = async (req, res) => {
    try {
        const event = await EventService.registerForEvent(req.params.id, req.user.id);
        res.status(200).json({
            message: 'Successfully registered for the event',
            event
        });
    } catch (error) {
        if (error.message === 'Event not found' || error.message === 'User not found') {
            return res.status(404).json({ message: error.message });
        }
        if (error.message === 'User already registered for this event') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
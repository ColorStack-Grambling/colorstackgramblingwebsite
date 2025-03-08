const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

// Route to add a new event
router.post('/events', eventController.addEvent);

// Route to get all events
router.get('/events', eventController.getAllEvents);

// Route to get a single event
router.get('/events/:id', eventController.getEventById);

// Route to edit an event
router.put('/events/:id', eventController.editEvent);

// Route to delete an event
router.delete('/events/:id', eventController.deleteEvent);

// Route to register for an event (requires authentication)
router.post('/events/:id/register', protect, eventController.registerForEvent);

module.exports = router;


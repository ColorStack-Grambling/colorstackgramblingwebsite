const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route to add a new event
router.post('/events', eventController.addEvent);

// Route to edit an existing event
router.put('/events/:id', eventController.editEvent);

// Route to delete an event
router.delete('/events/:id', eventController.deleteEvent);

// Route to get all events
router.get('/events', eventController.getAllEvents);

// Route to get a single event by ID
router.get('/events/:id', eventController.getEventById);

module.exports = router;


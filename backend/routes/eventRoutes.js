const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

// To create a new event
router.post('/', eventsController.createEvent);

// To retrieve all events
router.get('/', eventsController.getAllEvents);

// To retrieve a specific event by its ID
router.get('/:id', eventsController.getEventById);

// To update a specific event by its ID
router.put('/:id', eventsController.updateEvent);

// To delete a specific event by its ID
router.delete('/:id', eventsController.deleteEvent);

// Export the router object to be used in other parts of the app
module.exports = router;


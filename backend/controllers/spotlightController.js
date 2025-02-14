const express = require('express');
const router = express.Router();
const spotlightController = require('./spotlightController');

router.post('/', spotlightController.create);
router.get('/', spotlightController.getAll);
router.get('/:id', spotlightController.getById);
router.put('/:id', spotlightController.update);
router.delete('/:id', spotlightController.delete);

module.exports = router;
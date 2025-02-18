const MemberSpotlight = require('../models/MemberSpotlight');

// This controller should have the create, getAll, getById, update, and delete methods
const spotlightController = {
    // This method would create a new spotlight object and expects the request body to contain member details
    create: async (req, res) => {
        try {
            const spotlight = new MemberSpotlight(req.body);
            await spotlight.save();
            res.status(201).json(spotlight);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const spotlights = await MemberSpotlight.find();
            res.json(spotlights);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const spotlight = await MemberSpotlight.findById(req.params.id);
            if (!spotlight) return res.status(404).json({ message: 'Spotlight not found' });
            res.json(spotlight);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },


};

module.exports = spotlightController;
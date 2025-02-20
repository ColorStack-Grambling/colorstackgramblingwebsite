const MemberSpotlight = require('../models/MemberSpotlight');

const spotlightController = {
    create: async (req, res) => {
        try {
            const { memberName, achievements, photoUrl, graduationYear, major } = req.body;
            if (!memberName || !achievements || !photoUrl || !graduationYear || !major) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const spotlight = new MemberSpotlight(req.body);
            await spotlight.save();
            res.status(201).json(spotlight);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const spotlights = await MemberSpotlight.find()
                .sort({ date: -1 })
                .select('-__v');
            res.json(spotlights);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
                return res.status(400).json({ message: 'Invalid spotlight ID' });
            }

            const spotlight = await MemberSpotlight.findById(req.params.id).select('-__v');
            if (!spotlight) return res.status(404).json({ message: 'Spotlight not found' });
            res.json(spotlight);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    update: async (req, res) => {
        try {
            if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
                return res.status(400).json({ message: 'Invalid spotlight ID' });
            }

            const spotlight = await MemberSpotlight.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );

            if (!spotlight) return res.status(404).json({ message: 'Spotlight not found' });
            res.json(spotlight);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
                return res.status(400).json({ message: 'Invalid spotlight ID' });
            }

            const spotlight = await MemberSpotlight.findByIdAndDelete(req.params.id);
            if (!spotlight) return res.status(404).json({ message: 'Spotlight not found' });
            res.json({ message: 'Spotlight deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = spotlightController;
const MemberSpotlight = require('../models/MemberSpotlight');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const memberName = req.body.memberName
            .toLowerCase()
            .replace(/\s+/g, '-') 
            .replace(/[^a-z0-9-]/g, ''); 
        
        const timestamp = Date.now();
        const extension = path.extname(file.originalname);
        const filename = `${memberName}-${timestamp}${extension}`;
        
        cb(null, filename);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (extname && mimetype) {
            return cb(null, true);
        }
        cb(new Error('Only images are allowed!'));
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
}).single('photo');

const spotlightController = {
    create: async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: err.message });
            }

            try {
                if (!req.file) {
                    return res.status(400).json({ message: 'Please upload an image' });
                }

                const { memberName, achievements, graduationYear, major } = req.body;
                if (!memberName || !achievements || !graduationYear || !major) {
                    return res.status(400).json({ message: 'Missing required fields' });
                }

                const photoUrl = `/uploads/${req.file.filename}`;
                const spotlight = new MemberSpotlight({
                    memberName,
                    achievements: achievements.split(',').map(a => a.trim()),
                    photoUrl,
                    graduationYear,
                    major
                });

                await spotlight.save();
                res.status(201).json(spotlight);
            } catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
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
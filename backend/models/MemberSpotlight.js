const mongoose = require('mongoose');

const memberSpotlightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  achievements: [String],
  photoUrl: { type: String, required: true },
  featured: { type: Boolean, default: false },
  graduationYear: Number,
  major: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MemberSpotlight', memberSpotlightSchema);
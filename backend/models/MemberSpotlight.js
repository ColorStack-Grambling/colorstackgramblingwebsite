const mongoose = require('mongoose');

const spotlightSchema = new mongoose.Schema({
  memberName: {
    type: String,
    required: true
  },
  achievements: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }, 
  photoUrl: {
    type: String,
    required: true
  }, 
  graduationYear: {
    type: Number,
    required: true
  },
  major: {
    type: String,
    required: true
  },
});

const MemberSpotlight = mongoose.model('MemberSpotlight', spotlightSchema);

module.exports = MemberSpotlight;

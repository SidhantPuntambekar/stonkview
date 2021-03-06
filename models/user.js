const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  stocks: {
    type: [String],
    default: undefined
  },
  notifications:
  {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Notification",
    default: undefined
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
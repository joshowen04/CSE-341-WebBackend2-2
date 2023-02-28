const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    gitHubId: {
      type: String,
      required: true
    },
    gitHubUserName: {
      type: String,
      required: true
    },
    gitHubDisplayName: {
      type: String,
      required: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    userLevel: {
      type: String
    },
    address: {
      type: String
    },
    updated: {
      type: Date,
      default: new Date()
    }
  },
  { collection: 'users' }
);

module.exports = mongoose.model('Users', UserSchema);

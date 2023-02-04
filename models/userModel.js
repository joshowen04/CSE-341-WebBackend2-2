const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
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

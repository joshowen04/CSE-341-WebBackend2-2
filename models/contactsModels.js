const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: 'Kindly enter the First Name'
    },
    lastName: {
      type: String,
      required: 'Kindly enter the Last Name'
    },
    email: {
      type: String,
      required: 'Kindly enter the email'
    },
    favoriteColor: {
      type: String,
      required: 'Kindly enter the favorite Color'
    },
    birthday: {
      type: String,
      required: 'Kindly enter the favorite Color'
    }
  },
  { collection: 'contacts' }
);

module.exports = mongoose.model('Contacts', ContactSchema);

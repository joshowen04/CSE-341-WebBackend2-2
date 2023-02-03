var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CoursesSchema = new Schema({
  id: {
    type: int,
    required: 'Kindly enter the name of the task'
  },
  lastName: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  favoriteColor: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  birthday: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Courses', CoursesSchema);

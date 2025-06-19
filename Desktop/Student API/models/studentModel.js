const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

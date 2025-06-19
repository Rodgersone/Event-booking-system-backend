// routes/api.js
const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');

// ➕ POST: Add a student
router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).send({ message: 'Student added successfully', data: savedStudent });
  } catch (err) {
    res.status(400).send({ message: 'Failed to add student', error: err.message });
  }
});

// 📥 GET: All students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (err) {
    res.status(500).send({ message: 'Failed to fetch students', error: err.message });
  }
});

// 📘 GET: One student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send({ message: 'Student not found' });
    res.status(200).send(student);
  } catch (err) {
    res.status(400).send({ message: 'Invalid ID or error', error: err.message });
  }
});

// ✏️ PUT: Update a student by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) return res.status(404).send({ message: 'Student not found' });
    res.status(200).send({ message: 'Student updated successfully', data: updatedStudent });
  } catch (err) {
    res.status(400).send({ message: 'Update failed', error: err.message });
  }
});

// ❌ DELETE: Remove a student by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).send({ message: 'Student not found' });
    res.status(200).send({ message: 'Student deleted successfully', data: deletedStudent });
  } catch (err) {
    res.status(400).send({ message: 'Deletion failed', error: err.message });
  }
});

module.exports = router;

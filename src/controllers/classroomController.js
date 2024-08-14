const Classroom = require('../models/Classroom');
const User = require('../models/User');

exports.createClassroom = async (req, res) => {
  try {
    const { name, startTime, endTime, days } = req.body;

    const newClassroom = new Classroom({
      name,
      startTime,
      endTime,
      days
    });

    const savedClassroom = await newClassroom.save();
    res.status(201).json(savedClassroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating classroom' });
  }
};

exports.getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find().populate('teacherId');
    res.json(classrooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching classrooms' });
  }
};

exports.getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id).populate('teacherId');
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }
    res.json(classroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching classroom' });
  }
};

exports.updateClassroom = async (req, res) => {
  try {
    const updatedClassroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedClassroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }
    res.json(updatedClassroom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating classroom' });
  }
};

exports.deleteClassroom = async (req, res) => {
  try {
    const deletedClassroom = await Classroom.findByIdAndDelete(req.params.id);
    if (!deletedClassroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }
    res.json({ message: 'Classroom deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting classroom' });
  }
};

exports.createClassroom = async (req, res) => {
  try {
    const { name, startTime, endTime, days } = req.body;

    const newClassroom = new Classroom({
      name,
      startTime,
      endTime,
      days,
    });

    const savedClassroom = await newClassroom.save();
    res.status(201).json(savedClassroom);
  } catch (error) {
    console.error('Error creating classroom:', error);
    res.status(500).json({ message: 'Error creating classroom' });
  }
};

exports.assignTeacherToClassroom = async (req, res) => {
  try {
    const { classroomId, teacherId } = req.params;

    const classroom = await Classroom.findByIdAndUpdate(classroomId, { teacherId }, { new: true });
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    res.json({ message: 'Teacher assigned to classroom successfully' });
  } catch (error) {
    console.error('Error assigning teacher:', error);
    res.status(500).json({ message: 'Error assigning teacher' });
  }
};


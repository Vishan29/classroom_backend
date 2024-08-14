const express = require('express');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

// Classroom routes
router.post('/classrooms', classroomController.createClassroom);
router.get('/classrooms', classroomController.getAllClassrooms);
router.get('/classrooms/:id', classroomController.getClassroomById);
router.put('/classrooms/:id', classroomController.updateClassroom);
router.delete('/classrooms/:id', classroomController.deleteClassroom);
router.put('/classrooms/:id/assign-teacher', classroomController.assignTeacherToClassroom);

module.exports = router;
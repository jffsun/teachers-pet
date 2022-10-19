const router = require('express').Router();
const studentInfoRoutes = require('./student-info');
const teacherRoutes = require('./teacher-route');

router.use('/student-info', studentInfoRoutes);
router.use('/teacher', teacherRoutes);

module.exports = router;
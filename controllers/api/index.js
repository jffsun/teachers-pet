const router = require('express').Router();
const studentInfoRoutes = require('./student-info');
const teacherRoutes = require('./teacher-route');

router.use('/student-info', studentInfoRoutes);
router.use('/teacher-route', teacherRoutes);

module.exports = router;
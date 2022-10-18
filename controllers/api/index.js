const router = require('express').Router();
const loginRoutes = require('./logIn-route');
const studentInfoRoutes = require('./student-info-route');
const teacherRoutes = require('./teacher-route');

router.use('/logIn-route', loginRoutes);
router.use('/studentInfo-Route', studentInfoRoutes);
router.use('/teacher-route', teacherRoutes);

module.exports = router;
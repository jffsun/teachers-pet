const router = require('express').Router();
const loginRoutes = require('../api/logIn-route');
const parentcardRoutes = require('../api/parentCard-route');
const teacherRoutes = require('../api/teacher-route');

router.use('/loginRoutes', loginRoutes);
router.use('/parentcardRoutes', parentcardRoutes);
router.use('/teacherRoutes', teacherRoutes);

module.exports = router;
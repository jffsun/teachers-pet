const router = require('express').Router();
const loginRoutes = require('./logIn-route');
const parentcardRoutes = require('./parentCard-route');
const teacherRoutes = require('./teacher-route');

router.use('/logIn-route', loginRoutes);
router.use('/parentCard-Route', parentcardRoutes);
router.use('/teacher-route', teacherRoutes);

module.exports = router;
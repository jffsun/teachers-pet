const router = require('express').Router();
const parentRoute = require('./parentRoute');
const teacherRoutes = require('./teacherRoute');

router.use('/parent', parentRoute);
router.use('/teacher', teacherRoutes);

module.exports = router;
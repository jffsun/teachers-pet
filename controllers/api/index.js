const router = require('express').Router();
const parentRoute = require('./parentRoute');
const teacherRoutes = require('./teacherRoute');

// Serve functionality from parentRoute.js and teacherRoute.js
router.use('/parent', parentRoute);
router.use('/teacher', teacherRoutes);

module.exports = router;
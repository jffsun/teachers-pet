const router = require('express').Router();
const classroomRoutes = require('../../controllers/api/classroom-routes');
const userDataRoutes = require('./userdata-route');

router.use('/classroom', classroomRoutes);
router.use('/userdata', userDataRoutes);

module.exports = router;
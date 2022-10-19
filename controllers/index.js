const router = require('express').Router();
const login = require('./login.js')
const apiRoutes = require('./api');

router.use('/', login);
router.use('/api', apiRoutes);

module.exports = router;
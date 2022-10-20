const router = require('express').Router();
const loginRoute = require('./loginRoute.js')
const apiRoutes = require('./api');

router.get('/', (req, res) => {
    res.render('login');
});
router.use('/login', loginRoute);
router.use('/api', apiRoutes);

module.exports = router;
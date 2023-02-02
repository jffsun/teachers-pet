const router = require('express').Router();
const loginRoute = require('./loginRoute.js')
const apiRoutes = require('./api');

// Root route render the login page
router.get('/', (req, res) => {
    res.render('login');
});

// Serve loginRoute.js for login functionality 
router.use('/', loginRoute);

// Mount routes to ("/api")
router.use('/api', apiRoutes);

module.exports = router;
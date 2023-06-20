// Function redirects user to the root route "/" login page if not logged into a session
const auth = (req, res, next) => {

    if (!req.session.logged_in) {
      res.redirect('/');

    // If logged in, continue
    } else {
      next();
    }
  };
  
  module.exports = auth;
  
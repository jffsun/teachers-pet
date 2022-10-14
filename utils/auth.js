const auth = (req, res, next) => {
    // If the user has not logged in, redirect to the login page

    if (!req.session.logged_in) {
      res.redirect('/login');
    // Else go to the next instance
    } else {
      next();
    }
  };
  
  module.exports = auth;
  
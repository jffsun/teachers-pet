const router = require('express').Router();
const { Teacher, Parent } = require("../models");

// Render login handlebars
router.post('/parent', async (req, res) => {
     try {
          // Find the parent who matches with the email in the database
          const parentCheck = await Parent.findOne({where: {email:  req.body.email, password: req.body.password}});
  
          // If there is no match with the username, send a incorrect message to the user and have them retry
          if (!parentCheck) {
               res.status(401).json({ message: 'Incorrect email or password, please try again.' });
               return; 
          }

          // Session variables based on the current logged in parent or teacher
          req.session.save(() => {
          req.session.logged_in = true;
          req.session.school_id = parentCheck.school_id;
          console.log('logged in success');
          console.log(req.session)
          res.json({ user: parentCheck, message: 'Logged in successfully!'});
          });
          
      } catch (err) {
          res.render('404')
      }
});

router.post('/teacher', async (req, res) => {
     try {
         // find the teacher who matches with the email and password in the database
         const teacherCheck = await Teacher.findOne({ where: {email:  req.body.email, password: req.body.password}});
        
         // if there is no match with the username, send a incorrect message to the user and have them retry
         if (!teacherCheck) {
         res.status(400).json({ message: 'Incorrect email or password, please try again.' });
         return; 
         }

         // Session variables based on the current logged in parent or teacher
         req.session.save(() => {
         req.session.logged_in = true;
         res.json({ user: teacherCheck, message: 'Logged in successfully!'})
         });
 
     } catch (err) {
         console.log(err);
         res.status(500).json(err);
     }
 });

module.exports = router;
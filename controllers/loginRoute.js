const router = require('express').Router();
const { Teacher, Parent, Student} = require("../models");

// Render login handlebars
router.post('/parent', async (req, res) => {
     try {
          // Find the parent who matches with the email in the database
          const parentCheck = await Parent.findOne({where: {email:  req.body.email, password: req.body.password}});
  
          // If there is no match with the username, send a incorrect message to the user and have them retry
          console.log(parentCheck)
          if (!parentCheck) {
               res.status(401).json({ message: 'Incorrect email or password, please try again.' });
               return; 
          }

          console.log(parentCheck.school_id) //make sure to clear
          
          // Redundant because we already have school_id from parent. Remove?
            //   const studentCard = await Student.findOne({where: {school_id: parentCheck.school_id}})

          // Session variables based on the current logged in parent or teacher
          req.session.save(() => {
          req.session.logged_in = true;
          req.session.school_id = parentCheck.school_id;
          res.json({ user: parentCheck, message: 'Logged in successfully!'});
          });
          
      } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
});

router.post('/teacher', async (req, res) => {
     try {
        console.log('TEACHER LOGIN ATTEMPT')

         // Find the teacher who matches with the email and password in the database
         const teacherCheck = await Teacher.findOne({ where: {email:  req.body.email, password: req.body.password}});
        
         // If there is no match with the username, send a incorrect message to the user and have them retry
         if (!teacherCheck) {
         res.status(400).json({ message: 'Incorrect email or password, please try again.' });
         return; 
         }

         // Session variables based on the current logged in parent or teacher
         req.session.save(() => {
         req.session.logged_in = true;
         res.json({ user: teacherCheck, message: 'Logged in successfully!'})
         console.log('TEACHER LOGIN SUCCESSFUL')
         });
 
     } catch (err) {
         console.log(err);
         res.status(500).json(err);
     }
 });

module.exports = router;
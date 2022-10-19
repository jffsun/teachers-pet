const router = require('express').Router();
const { Teacher, Parent, Student} = require("../models");

// Render login handlebars
router.post('/parent', async (req, res) => {
     try {
          console.log(req.body.email)
          console.log(req.body.password)
          // Find the parent who matches with the email in the database
          const parentCheck = await Parent.findOne({where: {email:  req.body.email, password: req.body.password}});
  
          // If there is no match with the username, send a incorrect message to the user and have them retry
          console.log(parentCheck)
          if (!parentCheck) {
               console.log("WE HERE")
               res.status(401).json({ message: 'Incorrect email or password, please try again.' });
               return; 
          }


          console.log(parentCheck.school_id)

          const studentCard = await Student.findOne({where: {school_id: parentCheck.school_id}})
          
          console.log('student')
          console.log(studentCard)
          // Session variables based on the current logged in parent or teacher
          req.session.save(() => {
          req.session.logged_in = true;
          res.json({ user: parentCheck, studentCard: studentCard, message: 'Logged in successfully!'})
          });
  
      } catch (err) {
          console.log(err);
          res.status(500).json(err);
      }
});

router.post('/teacher', async (req, res) => {
     try {
         // Find the parent who matches with the email in the database
         const teacherCheck = await Teacher.findOne({ where: {email:  req.body.email, password: req.body.password}});
 
         // If there is no match with the username, send a incorrect message to the user and have them retry
         if (!teacherCheck) {
         res.status(400).json({ message: 'Incorrect email or password, please try again.' });
         return; 
         }

 
         console.log(teacherCheck.id)

         const studentCard = await Student.findAll()
         
         console.log('student')
         console.log(studentCard)
         // Session variables based on the current logged in parent or teacher
         req.session.save(() => {
         req.session.logged_in = true;
         res.json({ user: teacherCheck, studentCard: studentCard, message: 'Logged in successfully!'})
         });
 
     } catch (err) {
         console.log(err);
         res.status(500).json(err);
     }
 });

module.exports = router;
const router = require('express').Router();
const { Teacher, Parent } = require("../../models");


// Parent's login
router.post('/', async (req, res) => {
    try {
        // Find the parent who matches with the email in the database
        const parentCheck = await Parent.findOne({ where: {Parent_email:  req.body.Parent_email}});

        // If there is no match with the username, send a incorrect message to the user and have them retry
        if (!parentCheck) {
        res.status(400).json({ message: 'Incorrect email or password, please try again.' });
        return;
        }​
        // Verifies if the password matches the parent's email
        const validPassword = await parentCheck.checkPw(req.body.password);
        
        // // If the password doesn't exist, then send the same error message to prevent password fishing.
        if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again.' });
        return;
        }


        // Session variables based on the current logged in parent or teacher
        req.session.save(() => {
        req.session.logged_in = true;
        res.json({ user: parentCheck, message: 'Logged in successfully!'})
        res.redirect('/student-info')
        });
        

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Teacher's login
router.post('/', async (req, res) => {
    try {
        // Find the parent who matches with the email in the database
        const teacherCheck = await Teacher.findOne({ where: {Teacher_email:  req.body.Teacher_email}});

        // If there is no match with the username, send a incorrect message to the user and have them retry
        if (!teacherCheck) {
        res.status(400).json({ message: 'Incorrect email or password, please try again.' });
        return;
        }​
        // Verifies if the password matches the parent's email
        const validPassword = await teacherCheck.checkPw(req.body.password);
        
        // // If the password doesn't exist, then send the same error message to prevent password fishing.
        if (!validPassword) {
        res.status(400).json({ message: 'Incorrect email or password, please try again.' });
        return;
        }​

        // Session variables based on the current logged in parent or teacher
        req.session.save(() => {
        req.session.logged_in = true;
        res.json({ user: teacherCheck, message: 'Logged in successfully!'})
        res.redirect('/teacher')
        });
        

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
const router = require("express").Router();
const { Student, Teacher, Board } = require("../../models");
const auth = require('../../utils/auth'); 
const sequelize = require('../../config/connection');

/* Routes currently mounted at "/api/parent"
Get parent's student info */
router.get("/", auth, async (req, res) => {
    try {
        // Requested details stored in "studentData" var
        const studentData = await Student.findOne({
            include: [{ model: Teacher }],
            
            // Include all student's information in request
            attributes: [
            'first_name',
            'last_name',
            'allergies',
            'medication',
            'diet',
            // Sequelize function to update date-of-birth into readable format
            [sequelize.fn(
                "DATE_FORMAT", 
                sequelize.col("dob"), 
                "%m/%d/%Y"),
                "dob"
            ],
            'notes',
            'teacher_id'],

            // Find by parent's student through parent's ID found in session
            where: {
                school_id: req.session.school_id,
            }
        });

        // Returned data stored in studentCard var
        const studentCard = studentData.get({plain: true});

        /* Render the parent Handlebars template with student's data passed in
        Also pass whether user is logged in for authorization */
        res.render('parent', { studentCard, logged_in: req.session.logged_in });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    } 
})
// Gets all teacher's announcements
router.get("/board", auth, async (req, res) => {
    try {    
        // All announcements and their data stored in "boardData" var
        const boardData = await Board.findAll({
            attributes: [
                'title',
                'message',
                'where',
                // Reformat announcement event's date 
                [sequelize.fn(
                    "DATE_FORMAT", 
                    sequelize.col("when"), 
                    "%m/%d/%Y"),
                    "when"
                ],
            ],
        });

        // Get each announced returned and store in "announcements" var
        const announcements = boardData.map((announcement) =>
            announcement.get({ plain: true })
        );
        // Render parentBoard Handlebars template with announcements data passed
        res.render('parentboard', { announcements});

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
})

// Allows parent to update child's information 
router.put('/', auth, async (req, res) => {
    try {
        // Student's updated info stored in "updateChild" var
        const updateChild = await Student.update(
            {
                allergies: req.body.allergies,
                medication: req.body.medication,
                diet: req.body.diet,
                notes: req.body.notes
            },
            { 
            // Targets student via parent's ID in session
            where: {
                school_id: req.session.school_id
            }
        });
        // If succcess, return JSON message with updated child and page is refreshed via front-end JS logic
        res.status(200).json(updateChild);
    } catch (err) {
        res.status(500).json(err)
    }
});

// Parent logs out by destroying current session
router.post('/logout', auth, async (req, res) => {
    try {
        
        console.log(req.session.logged_in);

        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        // If user was not logged in send 404
        } else {
            res.status(404).end();
            console.log("logout fail");
        }
    } catch(err) {
        res.status(500).json(err)
    };
});

module.exports = router;
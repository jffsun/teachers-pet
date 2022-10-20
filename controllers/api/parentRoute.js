const router = require("express").Router();
const { Student, Teacher, Parent, Board } = require("../../models");
const auth = require('../../utils/auth'); 
const sequelize = require('../../config/connection');

// get their student's info and all announcements from annoucement board
router.get("/", auth, async (req, res) => {
    try {

        // locates one child by its id value
        const studentData = await Student.findOne({
            include: [{ model: Teacher }],

            attributes: [
            'first_name',
            'last_name',
            'allergies',
            'medication',
            'diet',
            // convert dob from sql date format to USA date format 
            [
                sequelize.fn
                (
                  "DATE_FORMAT", 
                  sequelize.col("dob"), 
                  "%m/%d/%Y"
                ),
                "dob",
              ],
            'notes',
            'teacher_id',
            ],
            where: {
                school_id: req.session.school_id,
            }
        })

        const boardData = await Board.findAll({
            attributes: [
                'title',
                'message',
                'where',
                // convert dob from sql date format to USA date format 
                [
                    sequelize.fn
                    (
                      "DATE_FORMAT", 
                      sequelize.col("when"), 
                      "%m/%d/%Y"
                    ),
                    "when",
                  ],
            ],
            raw: true,
            nest: true,
        });
        console.log('THIS IS BOARD DATA');
        console.log(boardData);

        // serialize retrieved student sql data
        const studentCard = studentData.get({plain: true});

        console.log('STUDENT CARD');
        console.log(studentCard);

        // render attributes to studentcard.handlebars
        res.render('studentcard', { studentCard, loggedIn: req.session.loggedIn });

        // TO DO: CREATE PARTIAL HANDLEBAR FOR ANNOUNCEMENT
        // res.render('board', { boardCard, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
});

// logout, delete session.
router.post('/', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;
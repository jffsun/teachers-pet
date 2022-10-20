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
        const studentCard = studentData.get({plain: true});
        res.render('studentcard', { studentCard, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    } 
})

router.get("/board", auth, async (req, res) => {
    try {    
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
        });

        const announcements = boardData.map((announcement) =>
        announcement.get({ plain: true })
        );
        res.render('board', { announcements});

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
})


// PUT request to update child information data
router.put('/', auth, async (req, res) => {
    try {
        const updateChild = await Student.update(
            {
                allergies: req.body.allergies,
                medication: req.body.medication,
                diet: req.body.diet,
                notes: req.body.notes
            },
            {    
            where: {
                school_id: req.session.school_id
            }
        });
        res.status(200).json(updateChild);
    } catch (err) {
        res.status(500).json(err)
    }
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
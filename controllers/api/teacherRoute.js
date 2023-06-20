const router = require("express").Router();
const { Student, Board } = require("../../models");
const auth = require('../../utils/auth'); 
const sequelize = require('../../config/connection');

/* Route mounted at "/api/teacher"
Get all students' records */
router.get("/", auth, async (req, res) => {
    try {

    // Find all records of Student model with specified attributes
    const allStudents = await Student.findAll({
        attributes: [
        "first_name", 
        "last_name", 
        "allergies", 
        "medication", 
        "diet", 
        [sequelize.fn(
            "DATE_FORMAT", 
            sequelize.col("dob"), 
            "%m/%d/%Y"),
            "dob"
        ],
        "notes", 
        "teacher_id",
        ],
    });
    // Get each student's data and store in "studentCharts" var
    const studentCharts = allStudents.map((studentChart) =>
        studentChart.get({ plain:true})
    );
    // Render the teacher Handlebars template with all students' data
    res.render('teacher', { studentCharts, logged_in: req.session.logged_in});

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
});

// Allows teacher to post a new announcement
router.post('/', async (req, res) => {
    try {
        // Announcement's details stored in "newAnnouncement" var 
        const newAnnouncement = await Board.create({
            title: req.body.title,
            message: req.body.message,
            where: req.body.where,

            // Reformat the date so sequelize can store
            when: new Date('"'+req.body.when+'"').toISOString().slice(0, 19).replace('T', ' ')
        });

        // If successful, return JSON message with new announcement's details
        res.status(200).json({newAnnouncement, message : `Created Message!`})
    } catch(err) {
        res.status(500).json(err);
    };
});
// Allows teacher to view all their announcements
router.get("/teacherboard", auth, async (req, res) => {
    try {    
        const boardData = await Board.findAll({
            attributes: [
                'id',
                'title',
                'message',
                'where',
                [sequelize.fn(
                      "DATE_FORMAT", 
                      sequelize.col("when"), 
                      "%m/%d/%Y"),
                      "when"
                ],
            ],
        });
        // Store all announcements and their data in "announcements" var
        const announcements = boardData.map((announcement) =>
            announcement.get({ plain: true })
        );
        // Render the teacherboard Handlebars view with announcements data passed
        res.render('teacherboard', { announcements});

    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
})

// Alows teacher to update announcement from board
router.put("/", auth, async (req, res) => {
    try {
        // New announcement information stored in "updatedAnnouncement" var
        const updatedAnnouncement = await Board.update(
            {
                title: req.body.title,
                messsage: req.body.message,
                where: req.body.where,
                when: new Date('"'+req.body.when+'"').toISOString().slice(0, 19).replace('T', ' ')
            },
            {
            /* Target announcement to update by its ID
            ID is taken from container clicked in putMessage.js logic */
            where: {
                id: req.body.id,
            },
    });
    res.status(200).json(updatedAnnouncement);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// Allows teacher to delete an announcement from the announcement board
router.delete("*", auth, async (req, res) => {
    try {
        const deletedAnnouncement = await Board.destroy({
            where: {
            id: req.body.id,
            },
        });

    res.status(200).json(deletedAnnouncement);
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// TO DO: Log out for teacher

module.exports = router;
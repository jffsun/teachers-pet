const router = require("express").Router();
const { Student, Parent, Board } = require("../../models");
const auth = require('../../utils/auth'); 
const createTable = require('../../public/js/table.js')

// teacher viewing all student records
router.get("/", auth, async (req, res) => {
    try {

    // find all children
    const allStudents = await Student.findAll({

        // get these attributes from student table
        attributes: [
            "first_name", 
            "last_name", 
            "allergies", 
            "medication", 
            "diet", 
            "dob", 
            "school_id", 
            "notes", 
            "teacher_id"],

        // get name column from parent table
        include: [{ model: Parent }]
    });

    console.log('All students retrieved!');
    console.log(allStudents);
        
    res.status(200).json(allStudents[0].medication);

    // res.render('teacher', { tablesFormatted, loggedIn: req.session.loggedIn});
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
    // createTable(allStudents);
});

// teacher posts a new announcement to board
router.post('/', auth, async (req, res) => {
    try {

    // parse new board announcement request body 
    const newAnnouncement = await Board.create({
        title: req.body.title,
        message: req.body.message,
        where: req.body.where,

        // format date for sequelize
        when: new Date('"'+req.body.when+'"').toISOString().slice(0, 19).replace('T', ' ')
    })

    console.log('Announcement created!')
    res.status(200).json(newAnnouncement)
    
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    };
});

// update announcement from board
router.put("/", auth, async (req, res) => {
    
    try {
    // TO DO: GET ID OF ANNOUNCEMENT CLICKED
    const announcementID = 1;

    const updatedAnnouncement = await Board.update({
        where: {
            id: announcementID,
        },
        attributes: {
            title: req.body.title,
            messsage: req.body.message,
            where: req.body.where,

            // format to sql date format
            when: new Date('"'+req.body.when+'"').toISOString().slice(0, 19).replace('T', ' ')
        },
    });

    res.status(200).json(updatedAnnouncement);
    console.log('Announcement updated!')

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// delete announcement from board
router.delete("/", auth, async (req, res) => {
    try {

    // TO DO: GET ID OF ANNOUNCEMENT CLICKED
    const announcementID = 1;

    const deletedAnnouncement = await Board.destroy({
        where: {
            id: announcementID,
        },
    });

    console.log('Announcement deleted!')
    res.status(200).json(deletedAnnouncement);

    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
});



module.exports = router;


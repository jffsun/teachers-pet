const router = require("express").Router();
const { Student, Teacher, Parent, Board } = require("../../models");
const auth = require('../../utils/auth'); 
const sequelize = require('../../config/connection');

// get all announcements from annoucement board
// router.get("/", auth, (req, res) => {

router.get("/", auth, async (req, res) => {
    
    // get school_id from session
    // const schoolID = req.session.school_id;

    try {
        // const getAllAnnouncements = Board.findAll();

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

        // serialize retrieved student sql data
        const studentCard = studentData.get({plain: true});

        console.log('STUDENT CARD');
        console.log(studentCard);

        // render attributes to studentcard.handlebars
        res.render('studentcard', { studentCard, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
});

// GET route for all announcements 
router.get("/", auth, async (req, res) => {
    
    try {
        // locates one child by its id value
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
        console.log('THIS IS BOARD DATA');
        console.log(boardData);

        const boardCard = boardData.get({plain: true});

        console.log('BOARD CARD');
        console.log(boardCard);

        // TO DO: CREATE PARTIAL HANDLEBAR FOR ANNOUNCEMENT
        // res.render('board', { boardCard, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    };
})

    // Student.findOne({
    //     where: {
    //         school_id: req.params.school_id,
    //     },
    // })
    // .then(studentInfoData => {
    //     if (!studentInfoData) {
    //         res.status(404).json({ message: "No child found"});
    //         return;
    //     }
    //     res.json(studentInfoData);
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).json(err)
    // });


// update a child by its id value
router.put("/", (req, res) => {
    const schoolID = req.session.school_id;
    parentCard.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then(dbparentCardData => {
            if (!dbClassroomData) {
                res.status(404).json({ message: "no child found with this id"});
                return;
            }
            res.json(dbparentCardData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.put('/:id', async (req, res) => {
    try {
        const updatePost = await Post.update(req.body, {
            
            where : {
                id: req.params.id
            }
        
        }); 

        res.status(200).json(updatePost);
        
    } catch (err) {
        res.status(500).json(err)
    }
})

   
// router.delete("/:id", (req, res) => {
//     // delete a child by its id value
//     parentCard.destroy({
//         where: {
//             id: req.params.id,
//         },
//     })
//         .then(dbparentCardData => {
//             if (!dbparentCardData) {
//                 res.status(404).json({ message: "no child found with that id"});
//                 return;
//             }
//             res.json(dbparentCardData);
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         });
// });

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
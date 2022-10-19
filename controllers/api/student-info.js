const router = require("express").Router();
const { Student, Parent, Board } = require("../../models");
const auth = require('../../utils/auth'); 
const sequelize = require('../../config/connection');

// get all announcements from annoucement board
// router.get("/", auth, (req, res) => {

// router.get("/:school_id", auth, (req, res) => {
router.get("/:school_id", (req, res) => {

    // get all announcements from announcement board
    const getAllAnnouncements = Board.findAll();

    // locates one child by its id value
    const getStudentInfo =  Student.findOne({
        where: {
            school_id: req.params.school_id
        }
    });

   Promise
    .allSettled([getAllAnnouncements, getStudentInfo])
    .then(infoAndAnnouncements => {
        if (!infoAndAnnouncements) {
            res.status(404).json({ message: "No child found"});
            return;
        }
        res.json(infoAndAnnouncements);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});
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
router.put("/:id", (req, res) => {
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
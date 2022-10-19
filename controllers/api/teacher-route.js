const router = require("express").Router();
const { Board } = require("../../models");

function formatDate (date) {
    new Date('"' + date + '"').toISOString().slice(0, 19).replace('T', ' ')
}
// parents viewing student's data
// '/api/student-info' endpoint
// router.get("/", auth, (req, res) => {
    
//     // find all children
//     Student.findAll({
//         include: [Parent],
//             // attributes: ["id", "first_name", "last_name", "allergies", "medication", "diet", "dob", "school_id", "notes", "teacher_id"],
//     })
//     .then(allStudentInfoData => {
//         if(!allStudentInfoData) {
//             res.status(404).json({ message: "No student info"})
//             return;
//         }
//         res.json(allStudentInfoData);
//     })
//     .catch(err => {
//         console.log(err)
//         res.status(500).json(err)
//     });
// });

// // teacher route data 
// router.get("/", (req, res) => {
//     // find all teachers
//     teacherRoute.findAll({
//         attributes: ["id", "first_name", "last_name", "dob", "school_id"],

//     })
//     .then(dbteacherRoute => res.json (dbteacherRoute))
//     .catch(err => {
//         console.log(err)
//         res.status(500).json(err);
//     });
// });

// // gets one individual teacher
// router.get("/:id", (req, res) => {
//     // find a techer user by its id
//     teacherRoute.findOne({
//         where: {
//             id:req.params.id,
//         },
//         attributes: ["id", "first_name", "last_name", "school_id"],
//     })
//     .then(dbteacherRoute => {
//         if(!dbteacherRoute) {
//             res.status(404).json({ message: "no teacher found with this id"});
//             return;
//         }
//         res.json(dbUserData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// post request announcement board
router.post('/', (req, res) => {

    // parse new board annoucement request body 
    Board.create({
        title: req.body.title,
        message: req.body.message,
        where: req.body.where,

        // format date for sequelize
        when: new Date('"'+req.body.when+'"').toISOString().slice(0, 19).replace('T', ' ')
    })

    .then((newAnnouncement) => res.status(200).json(newAnnouncement))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
    });

// // update teacher 
// router.put("/:id", (req, res) => {
//     // update a teacher by its id value
//     teacherRoute.update(req.body, {
//         where: {
//             id: req.params.id,
//         },
//     })
//         .then(dbteacherRoute => {
//             if (!dbteacherRoute) {
//                 res.status(404).json({ message: "no teacher found with this id"});
//                 return;
//             }
//             res.json(dbteacherRoute);
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json(err)
//         });
// });

// delete teacher
router.delete("/:id", (req, res) => {
    // delete teacher by its id value
    teacherRoute.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then(dbteacherRoute => {
        if (!dbteacherRoute) {
            res.status(404).json({ message: "no teacher found with this id"});
            return;
        }
        res.json(dbteacherRoute);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
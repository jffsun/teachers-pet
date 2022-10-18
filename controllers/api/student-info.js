const sequelize = require('../../config/connection');
const router = require("express").Router();
const { Student, Parent, Teacher } = require("../../models");

// teacher viewing all students' data
// '/api/student-info' endpoint
router.get("/", (req, res) => {
    
    Student.findAll({
        include: {

            // TO DO: Join parent table to student table
            model: Teacher,
        }
        // include: Teacher,
        // attributes: [
        //  "school_id",
        //  "first_name", 
        //  "last_name", 
        //  "allergies", 
        //  "medication", 
        //  "diet", 
        //  "dob", 
        //  "notes", 
        //  "teacher_id"],
    })
    .then(allStudentInfoData => {
        if(!allStudentInfoData) {
            res.status(404).json({ message: "No student info"})
            return;
        }
        res.json(allStudentInfoData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

// locates one child by its unique school id value
router.get("/:school_id", (req, res) => {
    Student.findOne({
        where: {
            school_id: req.params.school_id,
        },
    })
    .then(studentInfoData => {
        if (!studentInfoData) {
            res.status(404).json({ message: "No child found"});
            return;
        }
        res.json(studentInfoData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

// parent updates their child's emergency card info
router.put("/:school_id", (req, res) => {
    Student.update(req.body, {
        where: {
            school_id: req.params.school_id,
        },
    })
        .then(newStudentInfoData => {
            if (!newStudentInfoData) {
                res.status(404).json({ message: "No child found with this id"});
                return;
            }
            res.json(newStudentInfoData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

// Should parents be allowed to delete their student's card?

// router.delete("/:school_id", (req, res) => {
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

module.exports = router;
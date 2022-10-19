const router = require("express").Router();
const { Student, Parent } = require("../../models");
const auth = require('../../utils/auth'); 

// parents viewing student's data
// '/api/student-info' endpoint
router.get("/", auth, (req, res) => {
    
    // find all children
    Student.findAll({
        include: [Parent],
            // attributes: ["id", "first_name", "last_name", "allergies", "medication", "diet", "dob", "school_id", "notes", "teacher_id"],
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

router.get("/:school_id", auth, (req, res) => {
    // locates one child by its id value
    // includes children by attributes

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

router.delete("/:id", (req, res) => {
    // delete a child by its id value
    parentCard.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(dbparentCardData => {
            if (!dbparentCardData) {
                res.status(404).json({ message: "no child found with that id"});
                return;
            }
            res.json(dbparentCardData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
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
const router = require("express").Router();
const { Classroom, UserData } = require("../../models");

// api classroom endpoint
// includes classroom userdata 
router.get("/", (req, res) => {
    // find all classroom
    Classroom.findAll({
        include: {
            student: UserData,
            attributes: ["first_name", "last_name", "allergies", "medication", "diet", "dob", "student_id", "notes"],
        },
    })

        .then(dbClassroomData => {
            if(!dbClassroomData) {
                res.status(404).json({ message: "no classroom found"})
                return;
            }
            res.json(dbClassroomData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
    
});

router.get("/:id", (req, res) => {
    // locates one classroom by its id value
    // includes its students by attributes
    Classroom.findOne({
        where: {
            id: req.params.id,
        },
        include: {
            student: UserData,
            attributes: ["first_name", "last_name", "allergies", "medication", "diet", "dob", "student_id", "notes"],

        },
    })
    .then(dbClassroomData => {
        if (!dbClassroomData) {
            res.status(404).json({ message: "no classroom found"});
            return;
        }
        res.json(dbClassroomData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.post("/", (req, res) => {
    // create a new classroom
    Classroom.create({
        category_name: req.body.category_name,
    })
        .then(dbClassroomData => res.json(dbClassroomData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.put("/:id", (req, res) => {
    // update a classroom by its id value
    Classroom.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then(dbClassroomData => {
            if (!dbClassroomData) {
                res.status(404).json({ message: "no classroom found with this id"});
                return;
            }
            res.json(dbClassroomData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.delete("/:id", (req, res) => {
    // delete a classroom by its id value
    Classroom.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(dbClassroomData => {
            if (!dbClassroomData) {
                res.status(404).json({ message: "no classroom found with that id"});
                return;
            }
            res.json(dbClassroomData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

module.exports = router;
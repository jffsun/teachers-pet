const router = require("express").Router();
const { parentCard, teacherRoute } = require("../../models");

// parents manipulating childs data
// includes classroom userdata 
router.get("/", (req, res) => {
    // find all children
    parentCard.findAll({
        include: {
            teacher: teacherRoute,
            attributes: ["id", "first_name", "last_name", "allergies", "medication", "diet", "dob", "school_id", "notes", "teacher_id"],
        },
    })

        .then(dbparentCardData => {
            if(!dbparentCardData) {
                res.status(404).json({ message: "no child found"})
                return;
            }
            res.json(dbparentCardData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
    
});

router.get("/:id", (req, res) => {
    // locates one child by its id value
    // includes children by attributes
    parentCard.findOne({
        where: {
            id: req.params.id,
        },
        include: {
            teacher: teacherRoute,
            attributes: ["id", "first_name", "last_name", "allergies", "medication", "diet", "dob", "school_id", "notes", "teacher_id"],

        },
    })
    .then(dbparentCardData => {
        if (!dbparentCardData) {
            res.status(404).json({ message: "no child found"});
            return;
        }
        res.json(dbparentCardData);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    });
});

router.post("/", (req, res) => {
    // create a new child
    parentCard.create({
        category_name: req.body.category_name,
    })
        .then(dbparentCardData => res.json(dbparentCardData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

router.put("/:id", (req, res) => {
    // update a child by its id value
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

module.exports = router;
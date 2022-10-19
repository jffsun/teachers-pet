const router = require("express").Router();
const { teacherRoute, parentCard } = require("../../models");
const auth = require('../utils/auth'); 

// teacher route data 

router.get("/", (req, res) => {
    // find all teachers
    teacherRoute.findAll({
        attributes: ["id", "first_name", "last_name", "dob", "school_id"],

    })
    .then(dbteacherRoute => res.json (dbteacherRoute))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// gets one individual teacher
router.get("/:id", (req, res) => {
    // find a techer user by its id
    teacherRoute.findOne({
        where: {
            id:req.params.id,
        },
        attributes: ["id", "first_name", "last_name", "school_id"],
    })
    .then(dbteacherRoute => {
        if(!dbteacherRoute) {
            res.status(404).json({ message: "no teacher found with this id"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});​
// add a teacher
router.post("/", (req, res) => {
    teacherRoute.create({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbteacherRoute => {
        if(!dbteacherRoute) {
            res.status(404).json({ message: "please enter all information for new teacher" })
            return;
        }
        res.json(dbteacherRoute);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
​
// update teacher 
router.put("/:id", (req, res) => {
    // update a teacher by its id value
    teacherRoute.update(req.body, {
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
            console.log(err)
            res.status(500).json(err)
        });
});
​
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
​
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
​
module.exports = router;
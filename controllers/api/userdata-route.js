const router = require("express").Router();
const { Userdata, Classroom } = require("../../models");

// api user data endpoint

// gets all user data
router.get("/", (req, res) => {
    // find all users
    Userdata.findAll({
        attributes: ["id", "name", "email", "password"],

    })
    .then(dbUserData => res.json (dbUserData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// gets one individual user
router.get("/:id", (req, res) => {
    // find a single user by its id
    Userdata.findOne({
        where: {
            id:req.params.id,
        },
        attributes: ["id", "name", "email", "password"],
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: "no user found with this id"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a new user
router.post("/", (req, res) => {
    Userdata.create({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: "please enter all information for new user" })
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update user 
router.put("/:id", (req, res) => {
    // update a user by its id value
    Userdata.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "no user found with this id"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
});

// delete user
router.delete("/:id", (req, res) => {
    // delete user by its id value
    Userdata.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: "no user found with this id"});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
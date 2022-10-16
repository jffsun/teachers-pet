const router = require("express").Router();
const sequelize = require('../../config/connection');
const { parentCard, teacherRoute} = require('../../models');
const { Post } = require("./parentCard-route");

// login (homeroute)
// gets all required login credentials. email, password and create new user
router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
        attributes: [
            'email',
            'password'
        ],
        include: [
            {
                model: parentCard,
                attributes: ["id", "first_name", "last_name", "allergies", "medication", "diet", "dob", "school_id", "notes", "teacher_id"],
              
            },
            {
                model: teacherRoute,
                attributes: ["id", "first_name", "last_name", "dob", "school_id"],
            }
        ]

    })
    .then(dbPostData => {
        const Post = dbPostData.map(post => post.get ({ plain: true}));
        res.render('homepage', {
            posts,
            // pass the logged in flag to the template
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    // if a session exists, redirect the request to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'email',
            'password'
        ],
        include: [
            {
                model: Classroom,
                attributes: ["first_name", "last_name", "allergies", "medication", "diet", "dob", "student_id", "notes"],
                include: {
                    model: Userdata,
                    attributes: ["id", "name", "email", "password"],
                }
            },
            {
                model: Userdata,
                attributes: ["id", "name", "email", "password"],
            }
        ]

    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'no login found with that id'});
            return;
        }

        // data being serialized
        const post = dbPostData.get ({plain: true});

        // pass data to template
        res.render('email-password login', {
            post,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

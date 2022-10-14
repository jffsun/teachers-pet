const { UUIDV4 } = require('sequelize');
const { User } = require('../models');

const userData = [
  {
    // Teacher login
    name: 'Walter White',
    email: 'walter.white@gmail.com',
    password: 'heisenberg',

    // school_id is generated upon being seeded
    school_id: UUIDV4(),
  },
  {
    // Parents login 
    name: 'Michael Scott',
    email: 'michael.scott@gmail.com',
    password: 'michael123',
    // TO DO: Assign their student's ID to this parent after student data's is first seeded
    school_id: null,
  },
  {
    name: 'Tiffany Knox',
    email: 'tiffany.knox@yahoo.com',
    password: 'password321',
    school_id: null,
  },
  {
    name: 'Michael McDonald',
    email: 'michael.mcdonald@hotmail.com',
    password: 'michael47',
    school_id: null,
  },
  {
    name: 'Isabelle Campbell',
    email: 'isabelle.campbell@hotmail.com',
    password: 'password123',
    school_id: null,
  },
  {
    name: 'Stephen Walker',
    email: 'stephen.walker@gmail.com',
    password: 'walker25',
    school_id: null,
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
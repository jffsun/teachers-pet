const { Parent } = require('../models');

const parentData = [
  // {
  //   // Teacher login
  //   // id: 001,
  //   // name: 'Walter White',
  //   // email: 'walter.white@gmail.com',
  //   // password: 'heisenberg',
  //   // school_id: 'ueQNJU',
  // },
  {
    // Parents with school IDs corresponding to their child
    id: 002,
    name: 'Michael Scott',
    email: 'michael.scott@gmail.com',
    password: 'michael123',
    school_id: '329sxf',
  },
  {
    id: 003,
    name: 'Tiffany Knox',
    email: 'tiffany.knox@yahoo.com',
    password: 'password321',
    school_id: 'B8UeaZ',
  },
  {
    id: 004,
    name: 'Michael McDonald',
    email: 'michael.mcdonald@hotmail.com',
    password: 'michael47',
    school_id: '6edmO4',
  },
  {
    id: 005,
    name: 'Isabelle Campbell',
    email: 'isabelle.campbell@hotmail.com',
    password: 'password123',
    school_id: '6pQ1t8',
  },
  {
    id: 006,
    name: 'Stephen Walker',
    email: 'stephen.walker@gmail.com',
    password: 'walker25',
    school_id: 'XUClDo',
  },
];

// Creates the above user login seed data using the User Model
const seedParentData = () => Parent.bulkCreate(parentData);

module.exports = seedParentData;
const { Parent } = require('../models');

const parentData = [
  {
    // Parents with school IDs corresponding to their child
    name: 'Michael Scott',
    email: 'michael.scott@gmail.com',
    password: 'michael123',
    school_id: '329sxf',
  },
  {
    name: 'Tiffany Knox',
    email: 'tiffany.knox@yahoo.com',
    password: 'password321',
    school_id: 'B8UeaZ',
  },
  {
    name: 'Michael McDonald',
    email: 'michael.mcdonald@hotmail.com',
    password: 'michael47',
    school_id: '6edmO4',
  },
  {
    name: 'Isabelle Campbell',
    email: 'isabelle.campbell@hotmail.com',
    password: 'password123',
    school_id: '6pQ1t8',
  },
  {
    name: 'Stephen Walker',
    email: 'stephen.walker@gmail.com',
    password: 'walker25',
    school_id: 'XUClDo',
  },
];

// Creates the above user login seed data using the User Model
const seedParentData = () => Parent.bulkCreate(parentData);

module.exports = seedParentData;
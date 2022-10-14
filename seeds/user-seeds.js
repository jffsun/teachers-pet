const { UUIDV4 } = require('sequelize');
const { Classroom } = require('../models');

const userData = [
  {
    // Teacher login
    email: 'walterwhite@gmail.com',
    password: 'heisenberg',
  },
  {
    // Parents login 
    email: 'kenneth.scott@gmail.com',
    password: 'keith123',
  },
  {
    email: 'tiffany.knox@yahoo.com',
    password: 'password321',
  },
  {
    email: 'michael.mcdonald@hotmail.com',
    password: 'michael47',
  },
  {
    email: 'ruth.campbell@hotmail.com',
    password: 'password123',
  },
  {
    email: 'stephenwalker@gmail.com',
    password: 'walker25',
  },
];

const seedUserData = () => Classroom.bulkCreate(userData);

module.exports = seedUserData;
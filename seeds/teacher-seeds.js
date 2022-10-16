const { UUIDV4 } = require('sequelize');
const { Teacher } = require('../models');

const teacherData = [
  {
    first_name: 'Walter',
    last_name: 'White',
    school_id: UUIDV4(),
  },
];

const seedTeachers = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeachers;
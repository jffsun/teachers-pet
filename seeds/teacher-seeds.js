const { Teacher } = require('../models');

const teacherData = [
  {
    id: 001,
    first_name: 'Walter',
    last_name: 'White',
    school_id: 'ueQNJU',
  },
];

// Creates the above teacher seed data using the Teacher Model
const seedTeachers = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeachers;
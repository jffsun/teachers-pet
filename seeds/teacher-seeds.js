const { Teacher } = require('../models');

const teacherData = [
  {
    id: 001,
    name: 'Walter White',
    email: 'w.white@jpwynne.com',
    password: 'heisenburg',
  },
];

// Creates the above teacher seed data using the Teacher Model
const seedTeachers = () => Teacher.bulkCreate(teacherData);

module.exports = seedTeachers;
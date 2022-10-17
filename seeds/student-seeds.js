const { Student } = require('../models');

const studentData = [
  {
    school_id: '329sxf',
    first_name: 'Keith',
    last_name: 'Scott',
    // Null attributes to be updated by parent through PUT request
    allergies: null,
    medication: null,
    diet: null,
    // In YYYY-MM-DD format
    dob: 2017-07-13,
    notes: null,
    teacher_id: 001,
  },
  {
    school_id: 'B8UeaZ',
    first_name: 'Kimberly',
    last_name: 'Knox',
    allergies: null,
    medication: null,
    diet: null,
    dob: 2017-03-23,
    notes: null,
    teacher_id: 001,
  },
  {
    school_id: '6edmO4',
    first_name: 'Jonathan',
    last_name: 'McDonald',
    allergies: null,
    medication: null,
    diet: null,
    dob: 2017-05-15,
    notes: null,
    teacher_id: 001,
  },
  {
    school_id: '6pQ1t8',
    first_name: 'Ruth',
    last_name: 'Campbell',
    allergies: null,
    medication: null,
    diet: null,
    dob: 2016-12-30,
    notes: null,
    teacher_id: 001,
  },
  {
    school_id: 'XUClDo',
    first_name: 'Julian',
    last_name: 'Walker',
    allergies: null,
    medication: null,
    diet: null,
    dob: 2016-12-30,
    notes: null,
    teacher_id: 001,
  },
];

// Creates the above student seed data using the Student Model
const seedStudents = () => Student.bulkCreate(studentData);

module.exports = seedStudents;
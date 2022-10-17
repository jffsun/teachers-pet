const { Student } = require('../models');

const studentData = [
  {
    first_name: 'Keith',
    last_name: 'Scott',
    // Null attributes to be updated by parent through PUT request
    allergies: null,
    medication: null,
    diet: null,
    // In YYYY-MM-DD format
    dob: 20170713,
    school_id: '329sxf',
    notes: null,
    teacher_id: 001,
  },
  {
    first_name: 'Kimberly',
    last_name: 'Knox',
    allergies: null,
    medication: null,
    diet: null,
    dob: 20170323,
    school_id: 'B8UeaZ',
    notes: null,
    teacher_id: 001,
  },
  {
    first_name: 'Jonathan',
    last_name: 'McDonald',
    allergies: null,
    medication: null,
    diet: null,
    dob: 20170515,
    school_id: '6edmO4',
    notes: null,
    teacher_id: 001,
  },
  {
    first_name: 'Ruth',
    last_name: 'Campbell',
    allergies: null,
    medication: null,
    diet: null,
    dob: 20161230,
    school_id: '6pQ1t8',
    notes: null,
    teacher_id: 001,
  },
  {
    first_name: 'Julian',
    last_name: 'Walker',
    allergies: null,
    medication: null,
    diet: null,
    dob: 20161230,
    school_id: 'XUClDo',
    notes: null,
    teacher_id: 001,
  },
];

// Creates the above student seed data using the Student Model
const seedStudents = () => Student.bulkCreate(studentData);

module.exports = seedStudents;
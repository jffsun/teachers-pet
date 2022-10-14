const { UUIDV4 } = require('sequelize');
const { Classroom } = require('../models');

const studentData = [
  {
    first_name: 'Keith',
    last_name: 'Scott',
    allergies: null,
    medication: 'Asthma Inhaler',
    diet: null,
    // In YYYY-MM-DD format
    dob: 2017-07-13,
    school_id: UUIDV4(),
    notes: 'Keith must use his inhaler during P.E. and any breaks involving running.',
    teacher_id: 001,
  },
  {
    first_name: 'Kimberly',
    last_name: 'Knox',
    allergies: 'Peanuts',
    medication: 'EpiPen if peanuts are ingested',
    diet: 'No peanuts or foods containing peanut oil',
    dob: 2017-03-23,
    school_id: UUIDV4(),
    notes: null,
    teacher_id: 001,
  },
  {
    first_name: 'Jonathan',
    last_name: 'McDonald',
    allergies: null,
    medication: null,
    diet: null,
    dob: 2017-05-15,
    school_id: UUIDV4(),
    notes: 'Jonathan will be picked up everyday by his Aunt Stacy',
    teacher_id: 001,
  },
  {
    first_name: 'Ruth',
    last_name: 'Campbell',
    allergies: 'Pollen',
    medication: "Children's Claritin",
    diet: 'Vegetarian',
    dob: 2016-12-30,
    school_id: UUIDV4(),
    notes: 'Ruth needs to go to the nurse and take her Claritin everyday after lunch',
    teacher_id: 001,
  },
  {
    first_name: 'Julian',
    last_name: 'Walker',
    allergies: null,
    medication: null,
    diet: 'Pescatarian',
    dob: 2016-12-30,
    school_id: UUIDV4(),
    notes: null,
    teacher_id: 001,
  },
];

const seedStudents = () => Classroom.bulkCreate(studentData);

module.exports = seedStudents;
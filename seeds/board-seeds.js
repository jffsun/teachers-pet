const { Board } = require('../models');

const boardData = [
    {
        title: 'Field Trip',
        message: 'The school is taking a field trip to the San Diego Zoo! Wear comfortable shoes and pack a lunch.',
        where: 'San Diego',
        // Formats the date to SQL date time format
        when: new Date('2022-10-21').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'School Play',
        message: 'The school will be performing Peter Pan',
        where: 'At School',
        when: new Date('2023-06-12').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'Teacher Conference',
        message: 'Students will not attend school today for teacher conference',
        where: 'Students stay home and get the day off!',
        when: new Date('2022-11-23').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'Career Day',
        message: 'Parents are invited to talk about their careers and share with students',
        where: 'At School',
        when: new Date('2022-12-31').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'VISITOR REMINDER',
        message: 'Visitors must first check in before visiting a classroom',
        where: 'On Campus',
        when: null,
    },
];

// creates the above announcement seed data using teacher route
const seedsBoard = () => Board.bulkCreate(boardData);
console.log(boardData[1].when);
console.log(boardData[0].when);

module.exports = seedsBoard;
const { Board } = require('../models');

const boardData = [
    {
        title: 'Field Trip',
        message: 'The school is taking a field trip to the San Diego Zoo! Wear comfortable shoes and pack a lunch.',
        where: 'San Diego',
        // Formats the date to SQL date time format
        when: new Date('2022-09-10').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'School Play',
        message: 'The school will be performing Peter Pan',
        where: 'At School',
        when: new Date('2022-09-23').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'Teacher Conference',
        message: 'Students will not attend school today for teacher conference',
        where: 'Students stay home and get the day off!',
        when: new Date('2022-10-02').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'Career Day',
        message: 'Parents are invited to talk about their careers and share with students',
        where: 'At School',
        when: new Date('2022-10-16').toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        title: 'VISITOR REMINDER',
        message: 'Visitors must first check in before visiting a classroom',
        where: 'On Campus',
        when: new Date('2022-10-19').toISOString().slice(0, 19).replace('T', ' '),
    },
];

// creates the above announcement seed data using teacher route
const seedsBoard = () => Board.bulkCreate(boardData);

module.exports = seedsBoard;
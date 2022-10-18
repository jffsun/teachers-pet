const { Announcement } = require('../models');

const { announcementData } = [
    {
        announcement: 'Field Trip',
        message: 'The school is taking a field trip to the San Diego Zoo! Wear comfortable shoes and pack a lunch.',
        where: 'San Diego',
        when: 11/10/22
    },

    {
        announcement: 'School Play',
        message: 'The school will be performing Peter Pan',
        where: 'At School',
        when: 11/28/22
    },
    {
        announcement: 'Teacher Conference',
        message: 'Students will not attend school today for teacher conference',
        where: 'Students stay home and get the day off!',
        when: 12/5/22
    },
    {
        announcement: 'Career Day',
        message: 'Parents are invited to talk about their careers and share with students',
        where: 'At School',
        when: 12/14/22
    },
];

// creates the above announcement seed data using teacher route
const seedsAnnouncements = () => Announcement.bulkCreate(announcementData);

module.exports = seedsAnnouncements;
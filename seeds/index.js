const sequelize = require('../config/connection');
const student = require('./student-seeds');
const teacher = require('./teacher-seeds');
const parent = require('./parent-seeds');
const board = require('./board-seeds')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await teacher();
  await student();
  await parent();
  await board();

  process.exit(0);
};

seedAll();
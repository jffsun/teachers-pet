const sequelize = require('../config/connection');
const student = require('./student-seeds');
const teacher = require('./teacher-seeds');
const parent = require('./parent-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await teacher();
  await student();
  await parent();

  process.exit(0);
};

seedAll();
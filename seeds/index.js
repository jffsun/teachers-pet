const sequelize = require('../config/connection');
const student = require('./student-seeds');
const teacher = require('./teacher-seeds');
const user = require('./user-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await student();

  await teacher();

  await user();

  process.exit(0);
};

seedAll();

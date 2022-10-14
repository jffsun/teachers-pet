// import models
const Student = require("./Student");
const Teacher = require("./Teacher");

// create associations
Teacher.hasMany(Student, {
    foreignKey: 'teacher_id'
});

Student.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
});

module.exports = { Student, Teacher};
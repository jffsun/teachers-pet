// Import models
const Student = require("./Student");
const Teacher = require("./Teacher");
const Parent = require("./Parent");
const Board = require("./Board");

// Create associations
Teacher.hasMany(Student);

Student.belongsTo(Teacher);

Student.hasOne(Parent)

Parent.belongsTo(Student);

module.exports = { Student, Teacher, Parent, Board };

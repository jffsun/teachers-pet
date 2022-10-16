// Import models
const Student = require("./Student");
const Teacher = require("./Teacher");
const User = require("./User");

// Create associations
Teacher.hasMany(Student, {
    foreignKey: 'teacher_id'
});

Student.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
});

Student.hasOne(User, {
    foreignKey: 'school_id'
})

User.belongsTo(Student, {
    foreignKey: 'school_id'
});

module.exports = { Student, Teacher, User };

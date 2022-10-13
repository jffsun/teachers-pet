// import models
const Classroom = require("./Classroom");
const UserData = require("./UserData");

// create associations
Classroom.hasMany(UserData, {
    foreignKey: 'user_id'
});

UserData.belongsTo(Classroom, {
    foreignKey: 'user_id'
});

module.exports = { Classroom, UserData};
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   autoIncrement: true,
    // },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergies: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medication: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    diet: {
      type: DataTypes.STRING,
      allowNull: true,        
    },
    dob: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Sequelize's UUID functionality to generate a unique number for the student ID used to verify student's parent(s)
    school_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references : {
        model: 'teacher',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
  }
);

module.exports = Student;


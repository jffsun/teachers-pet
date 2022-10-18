const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
  {
    school_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
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
      type: DataTypes.DATE,
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


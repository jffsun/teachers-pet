const { UUIDV4, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Classroom extends Model {}

Classroom.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    // Sequelize's UUID functionality to generate a unique number for the student ID used to verify student's parent(s)
    student_id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'classroom',
  }
);

module.exports = Classroom;


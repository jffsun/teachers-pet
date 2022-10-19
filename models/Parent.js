const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parent extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  };
};

Parent.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    // Rename child_id for clarity?
    school_id: {
      type: DataTypes.STRING,
      references: {
        model: "student",
        key: "school_id"
      }
    },
  },
  {    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'parent',
  }
);

module.exports = Parent;

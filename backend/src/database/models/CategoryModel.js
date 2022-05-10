const { Sequelize } = require('sequelize')
const database = require('../index')

const CategoryModel = database.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(128),
    allowNull: false
  }
}, { timestamps: false,
     freezeTableName: true,
     createAt:false,
     updateAt:false })

module.exports = CategoryModel
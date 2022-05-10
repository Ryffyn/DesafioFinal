const { Sequelize } = require('sequelize')
const database = require('../index')
const CategoryModel = require('./CategoryModel')

const DeviceModel = database.define('device', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING(16),
    allowNull: false
  },
  partnumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min:{
        args:[0],
        msg:'Só aceita valores positivos no partnumber'
      }  
    }
  }
  
}, { timestamps: false ,
    freezeTableName: true,
    createAt:false,
    updateAt:false
    
 })

DeviceModel.belongsTo(CategoryModel, { 
  foreignKey: 'categoryId' 
})

CategoryModel.hasMany(DeviceModel, {
  foreignKey: 'categoryId'
})

module.exports = DeviceModel
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('device', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'category',
          key: 'id'
        }
      },
      color: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      partnumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('device')
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category', [
      { name: 'MOTHERBOARD' },
      { name: 'SSD' },
      { name: 'PDQ' },
      { name: 'HDD' },
      { name: 'LANBOARD' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', null, {});
  }
};

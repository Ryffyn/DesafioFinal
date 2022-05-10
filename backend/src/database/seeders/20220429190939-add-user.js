'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      { username: 'admin',  password:  'admin'},
      { username: 'admin2', password: 'admin2'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('category', null, {});
  }
};

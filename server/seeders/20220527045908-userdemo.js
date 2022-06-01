'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email:"jd@gmail.com",
        phonenumber: "1321212312",
        password:"Art123",
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('users', null, {});
     */
  }
};

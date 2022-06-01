'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('products', [{
      image: 'Images/1636495450117.png',
      title:"Asus CPU",
      price: 200,
      description:"awesome",
      createdAt:new Date(),
      updatedAt:new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('products', null, {});
     */
  }
};

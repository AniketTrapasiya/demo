'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('reviews', [{
        rating: '10',
        description: 'nice',
        product_id:1,
        createdAt:new Date(),
        updatedAt:new Date()
     
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('review', null, {});
     */
  }
};

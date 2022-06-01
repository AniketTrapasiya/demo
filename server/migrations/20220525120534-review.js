'use strict';
const DataTypes = require('sequelize')

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('reviews', {
      rating: {
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.TEXT
      }
    });

  },

  async down(queryInterface, Sequelize) {
    
      await queryInterface.dropTable('reviews');
     
  }
};

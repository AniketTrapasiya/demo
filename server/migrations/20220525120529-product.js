'use strict';
const DataTypes = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('products',  {
      image:{
        type:DataTypes.STRING,
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      price: {
          type: DataTypes.INTEGER,
      },
      descriptions:{
        type: DataTypes.STRING
          
      },
      published:{
        type: DataTypes.BOOLEAN

      }
  });
     
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.dropTable('products');
     
  }
};

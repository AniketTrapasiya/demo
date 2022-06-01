'use strict';
const DataTypes = require('sequelize')

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('users', {
        id: {
            type:DataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement : true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull:false,
          
      },
        phonenumber: {
            type: DataTypes.STRING,
        }
    });
  },
  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users');
   
}
}

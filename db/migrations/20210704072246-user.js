"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
       
      },
      lastName : {
        type: Sequelize.STRING,
       
      },

      email  : {
        type: Sequelize.STRING,
       
      },

      password   : {
        type: Sequelize.STRING,
       
      },

      username : {
        type: Sequelize.STRING,
        unique:true
       
      },


      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};

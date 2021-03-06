'use strict';
const sequelize = require("sequelize");


//Criar migrations.
//yarn sequelize migration:create --name=create-vendedor


//Rodar a migration.
//yarn sequelize db:migrate

//Desfazer a ultima migration
//yarn sequelize db:migrate:undo

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendedores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('vendedores');

  }
};

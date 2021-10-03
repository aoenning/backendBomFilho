'use strict';

const sequelize = require("sequelize");


//Criar migrations.
//yarn sequelize migration:create --name=create-produtos

//Rodar a migration.
//yarn sequelize db:migrate

//Desfazer a ultima migration
//yarn sequelize db:migrate:undo

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      unidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      preco: {
        type: Sequelize.DECIMAL
      },

      status: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('produtos');

  }
};

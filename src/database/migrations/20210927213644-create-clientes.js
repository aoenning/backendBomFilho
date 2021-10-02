'use strict';

const sequelize = require("sequelize");


//Criar migrations.
//yarn sequelize migration:create --name=create-clientes

//Rodar a migration.
//yarn sequelize db:migrate

//Desfazer a ultima migration
//yarn sequelize db:migrate:undo

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      cnpj: {
        type: Sequelize.STRING,
      },

      cpf: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
      },

      telefone: {
        type: Sequelize.STRING,
      },

      endereco: {
        type: Sequelize.STRING,
      },

      cep: {
        type: Sequelize.STRING,
      },

      cidade: {
        type: Sequelize.STRING,
      },

      estado: {
        type: Sequelize.STRING,
      },

      tipo_atividade: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('clientes');

  }
};

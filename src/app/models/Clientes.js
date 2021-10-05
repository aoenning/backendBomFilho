import Sequelize, { Model } from "sequelize";

class Clientes extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                cnpj: Sequelize.STRING,
                cpf: Sequelize.STRING,
                email: Sequelize.STRING,
                telefone: Sequelize.STRING,
                endereco: Sequelize.STRING,
                cep: Sequelize.STRING,
                cidade: Sequelize.STRING,
                estado: Sequelize.STRING,
                tipo_atividade: Sequelize.STRING,
                status: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Clientes;
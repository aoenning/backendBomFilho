import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

class Produtos extends Model {

    static init(sequelize) {
        super.init(
            {
                descricao: Sequelize.STRING,
                unidade: Sequelize.STRING,
                preco: Sequelize.DECIMAL,
                status: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Produtos;
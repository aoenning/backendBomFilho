import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

class Vendedores extends Model {

    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                cpf: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Vendedores;
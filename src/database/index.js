import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import User from '../app/model/User';
import Produtos from '../app/model/Produtos';
import Vendedores from '../app/model/Vendedores';
import Clientes from '../app/model/Clientes';


const models = [User, Clientes, Produtos, Vendedores];

class Database {
    constructor() {
        this.init();
    }

    init() {
        // this.connection = new Sequelize(databaseConfig);
        this.connection = new Sequelize(process.env.DATABASE_URL);
        models.map(model => model.init(this.connection));
    }
}

export default new Database();
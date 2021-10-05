import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import User from '../app/models/User';
import Clientes from '../app/models/Clientes';
import Produtos from '../app/models/Produtos';
import Vendedores from '../app/models/Vendedores';


const models = [User, Clientes, Produtos, Vendedores];

const port = process.env.PORT || 3333;

class Database {
    constructor() {
        this.init();
    }

    init() {
        if(port){
            this.connection = new Sequelize(databaseConfig);
        }else{
            this.connection = new Sequelize(process.env.DATABASE_URL);
        }
        
        models.map(model => model.init(this.connection));
    }
}

export default new Database();






// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false, // very important
//         }
//     }
// });

// sequelize
//     .authenticate()
//     .then((s) => { 'conectado com sucesso' })
//     .catch((err) => { err })


// module.exports = sequelize;
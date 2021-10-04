import Sequelize from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // very important
        }
    }
});

sequelize
    .authenticate()
    .then((s) => { 'conectado com sucesso' })
    .catch((err) => { err })


module.exports = sequelize;
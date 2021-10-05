
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,

    "entities": [
        "app/model/**/*.js"
    ],
    "migrations": [
        "database/migrations/**/*.js"
    ],
    "cli": {
        "migrations": [
            "src/database/migrations/"
        ],
        "entitiesDir": "src/app/model"
    }
}

// module.exports = {
//     dialect: 'postgres', //'postgres',
//     host: 'localhost',
//     database: 'Bb_BomFilho',
//     username: 'postgres',
//     password: 685712,
//     port: 5432,
//     define: {
//         timestamps: true,
//         underscored: true,
//         uderscoredAll: true,
//     }
// }
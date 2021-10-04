
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
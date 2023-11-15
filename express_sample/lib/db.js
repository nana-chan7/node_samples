// 2023-11-15 week8
// Terminal: npm i mysql2

const dotenv = require('dotenv')
dotenv.config()

exports.info = {
    databese: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}
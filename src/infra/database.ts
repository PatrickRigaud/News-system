import dotenv from 'dotenv';
dotenv.config();


const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USUARIO,
        password: process.env.DB_SENHA,
        database: process.env.DB_NOME_DB
    }
});
module.exports = knex;
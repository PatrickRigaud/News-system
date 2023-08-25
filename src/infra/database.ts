import dotenv from 'dotenv';
dotenv.config();


import { Pool } from 'pg';

export const db = new Pool({
	user: process.env.db_usuario,
	password: process.env.db_senha,
	host: process.env.db_host,
	port: Number(process.env.db_port),
	database: process.env.db_nome_db
});


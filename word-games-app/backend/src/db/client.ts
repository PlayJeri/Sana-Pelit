import { Client } from "pg";

const user = process.env.POSTGRES_USER;
const host = process.env.POSTGRES_HOST;
const database = process.env.POSTGRES_DB;

export const client = new Client({
	user,
	host,
	database,
});

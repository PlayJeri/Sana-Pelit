import { client } from "../src/db/client";

const user = Bun.env.POSTGRES_USER;
const host = process.env.POSTGRES_HOST;
const database = process.env.POSTGRES_DB;

console.log(user, host, database);

async function parse() {
	const file = Bun.file("assets/words.txt");
	const fileContent = await file.text();
	const words = fileContent
		.split("\n")
		.map((word) => word.trim())
		.filter((word) => word.length > 1);

	const validLetters = /^[a-zäö]+$/;

	console.log(words.length);

	const validWords = words.filter((word) => validLetters.test(word));

	console.log(validWords.length);

	return validWords;
}

async function insert() {
	try {
		await client.connect();

		const words = await parse();

		await client.query(`
			CREATE TABLE IF NOT EXISTS words (
			  id SERIAL PRIMARY KEY,
			  word VARCHAR(255) UNIQUE NOT NULL
			)
		  `);

		for (const word of words) {
			await client.query(
				"INSERT INTO words (word) VALUES ($1) ON CONFLICT DO NOTHING",
				[word]
			);
		}

		console.log("Words inserted successfully");
	} catch (error) {
		console.error("Error inserting words:", error);
	} finally {
		await client.end();
	}
}

insert();

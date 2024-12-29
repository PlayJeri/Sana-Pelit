import { Hono } from "hono";
import { client } from "./db/client";

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

app.get("/word", async (c) => {
	try {
		client.connect();
		const result = await client.query(
			"SELECT word FROM words ORDER BY RANDOM() LIMIT 1"
		);
		const word = result.rows[0]?.word;

		if (word) {
			return c.json({ word });
		} else {
			return c.json({ error: "No words found" }, 404);
		}
	} catch (error) {
		console.error("Error fetching random word:", error);
		return c.json({ error: "No words found" }, 404);
	}
});

export default app;

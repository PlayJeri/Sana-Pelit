"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/games/wordGuesser/input";

const words = ["react", "next", "javascript", "typescript", "tailwind"];

export function WordGuessGame() {
	const [word] = useState(
		() => words[Math.floor(Math.random() * words.length)]
	);
	const [guess, setGuess] = useState("");
	const [attempts, setAttempts] = useState(0);
	const [message, setMessage] = useState("");

	const handleGuess = () => {
		setAttempts(attempts + 1);
		if (guess.toLowerCase() === word) {
			setMessage(`Onneksi olkoon! Arvasit sanan ${attempts + 1} yrityksellä.`);
		} else {
			setMessage(`Väärä arvaus. Yritä uudelleen!`);
		}
		setGuess("");
	};

	return (
		<div className="p-6 rounded-lg bg-neutral-800">
			<h2 className="mb-4 text-xl font-bold text-green-400">Sana-arvauspeli</h2>
			<p className="mb-4 text-neutral-300">
				Arvaa {word.length}-kirjaiminen sana:
			</p>
			<div className="flex gap-4 mb-4">
				<Input
					type="text"
					value={guess}
					onChange={(e) => setGuess(e.target.value)}
					className="bg-neutral-700 text-neutral-200 border-neutral-600 focus:border-green-500"
					placeholder="Kirjoita arvauksesi"
				/>
				<Button
					onClick={handleGuess}
					className="font-bold text-black bg-green-500 hover:bg-green-400"
				>
					Arvaa
				</Button>
			</div>
			{message && <p className="text-neutral-300">{message}</p>}
		</div>
	);
}

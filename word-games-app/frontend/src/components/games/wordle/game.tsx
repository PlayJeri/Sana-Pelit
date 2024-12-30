import React, { useEffect, useState } from "react";

const allWords = ["koira", "kissa", "tasku"];

export const WordleGame = () => {
	const [guesses, setGuesses] = useState<string[]>([]);
	const [answer, setAnswer] = useState<string>(
		allWords[Math.floor(Math.random() * 3)]
	);

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			const key = e.key.toLowerCase();
			setGuesses((prev) => {
				const lastGuess = prev[prev.length - 1] || "";
				console.log("last gues", lastGuess);
				if (key === "enter" && lastGuess.length === 5) {
					handleSubmit();
				} else if (key === "backspace") {
					return [...prev.slice(0, -1), lastGuess.slice(0, -1)];
				} else if (/^[a-z]$/.test(key) && lastGuess.length < 5) {
					return [...prev.slice(0, -1), lastGuess + key];
				}
				return prev;
			});
		};

		const handleSubmit = () => {
			const currentGuess = guesses[guesses.length - 1];
			if (currentGuess.length === 5) {
				setGuesses([...guesses, ""]);
				if (currentGuess === answer) {
					console.log("Voitit pelin!");
				}
			}
			console.log(guesses);
		};

		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, [answer, guesses]);

	const getClassName = (
		letter: string,
		index: number,
		guess: string,
		row: number
	) => {
		if (row === guesses.length - 1) {
			return "";
		}

		const answerLetterCount = answer.split(letter).length - 1;
		let guessLetterCount = guess.slice(0, index + 1).split(letter).length - 1;

		for (let i = index + 1; i < 5; i++) {
			if (answer[i] === letter) guessLetterCount++;
		}

		if (answer[index] === letter) {
			guessLetterCount++;
			return "bg-green-500";
		}

		if (answer.includes(letter) && guessLetterCount <= answerLetterCount) {
			return "bg-yellow-500";
		}

		return "";
	};

	return (
		<div className="p-4">
			<h1 className="mb-4 text-4xl font-bold text-center">Sanuli</h1>
			<div className="mt-2">
				{Array(6)
					.fill("")
					.map((_, rowIndex) => (
						<div key={rowIndex} className="grid grid-cols-5 mb-8">
							{Array(5)
								.fill("")
								.map((_, colIndex) => (
									<div
										key={colIndex}
										className={`flex items-center justify-center w-24 h-24 border border-gray-500 ${guesses[rowIndex] ? getClassName(guesses[rowIndex][colIndex], colIndex, guesses[rowIndex], rowIndex) : ""}`}
									>
										{guesses[rowIndex] ? guesses[rowIndex][colIndex] : ""}
									</div>
								))}
						</div>
					))}
			</div>
		</div>
	);
};

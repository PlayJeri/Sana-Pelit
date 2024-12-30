import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GameCards } from "./components/ui/gameCards";
import { Header } from "./components/ui/header";
import { CrossWordGame } from "./components/games/crossword/page";
import { WordGuesserGame } from "./components/games/wordGuesser/page";

const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-neutral-900 text-neutral-200">
			<Router>
				<nav>
					<Header />
				</nav>
				<main className="container px-4 py-8 mx-auto">
					<Routes>
						<Route path={"/"} element={<GameCards />} />
						<Route path="/pelit/ristikko" element={<CrossWordGame />} />
						<Route path="/pelit/arvaus" element={<WordGuesserGame />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
};

export default App;

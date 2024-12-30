import { Link } from "react-router-dom";

const games = [
	{
		id: "sanuli",
		name: "Sanuli",
		image: "/placeholder.svg?height=200&width=300",
	},
	{
		id: "ristikko",
		name: "Ristikko",
		image: "/placeholder.svg?height=200&width=300",
	},
	{
		id: "arvaus",
		name: "Sana-arvaus",
		image: "/placeholder.svg?height=200&width=300",
	},
];

export const GameCards = () => {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{games.map((game) => (
				<Link to={`/pelit/${game.id}`} key={game.id} className="block">
					<div className="p-4 rounded-lg shadow-lg bg-neutral-800">
						<img
							src={game.image}
							alt={game.name}
							width={300}
							height={200}
							className="object-cover w-full h-48 rounded-t-lg"
						/>
						<h2 className="mt-2 text-xl font-bold text-center text-green-500">
							{game.name}
						</h2>
					</div>
				</Link>
			))}
		</div>
	);
};

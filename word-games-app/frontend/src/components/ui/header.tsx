import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="py-4 border-b bg-neutral-900 border-neutral-800">
			<div className="container flex items-center justify-between px-4 mx-auto">
				<Link to="/">
					<h1 className="text-2xl font-bold text-green-500">Sanapelit</h1>
				</Link>
				<Button className="font-bold text-black bg-green-500 hover:bg-green-400">
					Kirjaudu sisään
				</Button>
			</div>
		</header>
	);
}

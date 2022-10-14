import { Link, useParams } from "react-router-dom";

import { IColorItem } from "../types/types";

const Person = ({ items }: { items: IColorItem[] }) => {
	const { id } = useParams();

	const matchedItem = items?.find((item) => item.person === id);

	return (
		<div>
			<h2>{matchedItem?.person}</h2>
			<h3>Favorite color is {matchedItem?.color}</h3>
			<Link to="/">Back</Link>
		</div>
	);
};

export default Person;

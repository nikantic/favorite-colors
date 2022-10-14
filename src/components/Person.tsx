import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { IColorItem } from "../types/types";
import { remove, update } from "../store/slice/personSlice";

const Person = () => {
	const { id } = useParams();
	const items: IColorItem[] = useSelector((state: any) => state.person.value);
	const matchedItem = items?.find((item) => item.person === id);
	const [favoriteColor, setFavoriteColor] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const removePerson = (id: string) => {
		dispatch(remove(id));
		navigate("/");
	};

	return (
		<div>
			<h2>{matchedItem?.person}</h2>
			<h3>Favorite color is {matchedItem?.color}</h3>
			<div>
				<button
					onClick={() =>
						matchedItem?.person && removePerson(matchedItem?.person)
					}
				>
					Remove Person
				</button>
			</div>
			<div>
				<p>Update Favorite Color</p>
				<input
					value={favoriteColor}
					onChange={(input) => setFavoriteColor(input.target.value)}
				/>
				<button
					onClick={() =>
						favoriteColor &&
						dispatch(
							update({ person: matchedItem?.person, color: favoriteColor })
						)
					}
				>
					Update
				</button>
			</div>
			<Link to="/">Back</Link>
		</div>
	);
};

export default Person;

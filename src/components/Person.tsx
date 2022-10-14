import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { IColorItem } from "../types/types";
import { remove, update } from "../store/slice/personSlice";
import { Button, Input } from "../styled/styled";

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
			<h1>{matchedItem?.person}</h1>
			<h2>Favorite color is {matchedItem?.color}</h2>
			<div>
				<Button
					onClick={() =>
						matchedItem?.person && removePerson(matchedItem?.person)
					}
				>
					Remove Person
				</Button>
			</div>
			<div>
				<p>Update Favorite Color:</p>
				<Input
					value={favoriteColor}
					onChange={(input) => setFavoriteColor(input.target.value)}
				/>
				<div>
					<Button
						onClick={() =>
							favoriteColor &&
							dispatch(
								update({ person: matchedItem?.person, color: favoriteColor })
							)
						}
					>
						Update
					</Button>
				</div>
			</div>
			<Button>
				<Link to="/">Back</Link>
			</Button>
		</div>
	);
};

export default Person;

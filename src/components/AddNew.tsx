import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { add } from "../store/slice/personSlice";
import { IColorItem } from "../types/types";

const AddNew = () => {
	const [person, setPerson] = useState({ person: "", color: "" });

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addNewPerson = (person: IColorItem) => {
		dispatch(add(person));
		navigate("/");
	};

	return (
		<div>
			<h1>Add new Person</h1>
			<p>Name:</p>
			<input
				value={person.person}
				onChange={(input) =>
					setPerson({ ...person, person: input.target.value })
				}
			/>
			<p>Favorite Color:</p>
			<input
				value={person.color}
				onChange={(input) =>
					setPerson({ ...person, color: input.target.value })
				}
			/>
			<div>
				<button onClick={() => person.person && addNewPerson(person)}>
					Save new person
				</button>
			</div>
			<Link to="/">Back</Link>
		</div>
	);
};

export default AddNew;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { add } from "../store/slice/personSlice";
import { IColorItem } from "../types/types";
import { Button, Input } from "../styled/styled";

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
			<Input
				value={person.person}
				onChange={(input) =>
					setPerson({ ...person, person: input.target.value })
				}
			/>
			<p>Favorite Color:</p>
			<Input
				value={person.color}
				onChange={(input) =>
					setPerson({ ...person, color: input.target.value })
				}
			/>
			<div>
				<Button onClick={() => person.person && addNewPerson(person)}>
					Save new person
				</Button>
			</div>
			<Button>
				<Link to="/">Back</Link>
			</Button>
		</div>
	);
};

export default AddNew;

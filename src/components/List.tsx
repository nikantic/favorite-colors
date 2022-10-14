import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IColorItem } from "../types/types";

const List = () => {
	const items: IColorItem[] = useSelector((state: any) => state.person.value);

	return (
		<div>
			<h1>Favorite Colors</h1>
			{items?.map((item) => (
				<Link key={item.person} to={`/user/${item.person}`}>
					<h3>{item.person}</h3>
				</Link>
			))}
			<Link to="/new">+ Add new person</Link>
		</div>
	);
};

export default List;

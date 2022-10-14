import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IColorItem } from "../types/types";
import { Button } from "../styled/styled";

const List = () => {
	const items: IColorItem[] = useSelector((state: any) => state.person.value);

	return (
		<div>
			<h1>Favorite Colors</h1>
			{items?.map((item) => (
				<Link key={item.person} to={`/user/${item.person}`}>
					<h2>{item.person}</h2>
				</Link>
			))}
			<Link to="/new">
				<Button>+ Add new person</Button>
			</Link>
		</div>
	);
};

export default List;

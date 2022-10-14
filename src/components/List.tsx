import { Link } from "react-router-dom";

import { IColorItem } from "../types/types";

const List = ({ items }: { items: IColorItem[] }) => {
	return (
		<div>
			{items?.map((item) => (
				<Link key={item.person} to={`/user/${item.person}`}>
					<h3>{item.person}</h3>
				</Link>
			))}
		</div>
	);
};

export default List;

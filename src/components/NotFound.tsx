import { Link } from "react-router-dom";

import { Button } from "../styled/styled";

const NotFound = () => (
	<div>
		<p>There doesn't seem to be anything here.</p>
		<Button>
			<Link to="/">Back</Link>
		</Button>
	</div>
);

export default NotFound;

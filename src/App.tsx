import { Routes, Route } from "react-router-dom";

import useFetch from "./hooks/useFetch";
import List from "./components/List";
import NotFound from "./components/NotFound";
import Person from "./components/Person";

const URL = "http://localhost:8080/";

const App = () => {
	const { colors } = useFetch(URL);

	return (
		<div>
			<Routes>
				<Route path="/" element={<List items={colors} />} />
				<Route path="/user">
					<Route path=":id" element={<Person items={colors} />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;

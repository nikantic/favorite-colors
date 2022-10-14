import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import List from "./components/List";
import NotFound from "./components/NotFound";
import Person from "./components/Person";
import AddNew from "./components/AddNew";

import useFetch from "./hooks/useFetch";
import { init } from "./store/slice/personSlice";

const URL = "http://localhost:8080/";

const App = () => {
	const { colors } = useFetch(URL);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(init(colors));
	}, [colors, dispatch]);

	return (
		<div>
			<Routes>
				<Route path="/" element={<List />} />
				<Route path="/user">
					<Route path=":id" element={<Person />} />
				</Route>
				<Route path="/new" element={<AddNew />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import List from "./components/List";
import store from "./store/store";

test("renders header", () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<List />
			</BrowserRouter>
		</Provider>
	);
	const header = screen.getByText(/Favorite Colors/i);
	expect(header).toBeInTheDocument();
});

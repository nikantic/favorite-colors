# Favorite Colors

Tech Interview Exercise Project includes following features:

- Local server - create local server and data object with list of items
- Hooks - create custom *useFetch* hook
- TypeScript - custom types and interfaces
- React Router - include detail page for item, 404 route
- Redux - include ability for CRUD (e.g. add new item to the list)
- Unit tests - write simple unit test with JEST
- Optional: Styled Components

## Notes

Create React App with TypeScript template:

```bash
npx create-react-app favorite-colors --template typescript
```

Fetching (remember - *await* must be inside *async* function)

```tsx
const fetchUrl = async (url: string) => {
	try {
		const response = await fetch(url);
		return response.json();
	} catch (error) {
		console.error("Error fetching the data", error);
	}
};

useEffect(() => {
    fetchUrl("http://api.open-notify.org/astros.json")?.then((response) => {
        console.log(response);
    });
}, []);
```

To host local server and json file on it you can use *Serve* library (pass -C for CORS)

```bash
serve ./src/data/data.json -p 8080 -C
```

React Router - routes can now be nested, hooks are used

Redux - check *personSlice* to see how slice is made and used to update global state

Unit test with JEST - simple test to check if Header is rendered (NOTE: have to wrap test with *BrowserRouter* and *Provider*)


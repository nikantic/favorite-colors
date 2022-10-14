# Favorite Colors

Tech Interview Exercise Project includes following features:

- Local server - create local server and data object with list of items
- Hooks - create custom hooks
- TypeScript - custom types and interfaces
- React Router - include detail page for item, 404 route
- Redux - include ability for CRUD (e.g. add new item to the list)
- Unit tests - write simple unit test
- Optional: Styled Components

## Notes

```bash
npx create-react-app favorite-colors --template typescript
```

Fetching (remember - await must be inside async function)

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

serve ./src/data/data.json -p 8080 -C

Redux


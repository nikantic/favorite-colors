import { useEffect, useState } from "react";

const fetchUrl = async (url: string) => {
	try {
		const response = await fetch(url);
		return response.json();
	} catch (error) {
		console.error("Error fetching the data", error);
	}
};

const useFetch = (url: string) => {
	const [data, setData] = useState({} as any);

	useEffect(() => {
		fetchUrl(url).then((response) => setData(response));
	}, [url]);

	return data;
};

export default useFetch;

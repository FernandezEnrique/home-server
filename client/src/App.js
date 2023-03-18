import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CardData from './components/CardData';
import './App.css';

function App() {
	// const baseURL = process.env.REACT_APP_API_URL
	const [data, setData] = useState(null);

	const fetchData = useCallback(async (query = 'content') => {
		console.log(`Fetching ${query} data`);
		setData(false);
		try {
			// Reemplazar por baseURL
			const res = await fetch(`http://localhost:5000/${query}/`);
			const data = await res.json();
			setData(data);
			return data;
		} catch (err) {
			alert(`Error fetching ${query} data, try again later`);
			return false;
		}
	}, []);

	useEffect(() => {
		console.log('App intiliazed');
		fetchData();
		console.log(data);
	}, [data, fetchData]);

	return (
		<Router>
			<div className="App">
				<CardData name="Contenido" data={false} />
			</div>
		</Router>
	);
}

export default App;

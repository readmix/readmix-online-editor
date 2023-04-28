import React from 'react';

import 'miniwindcss';
import './App.css';



export default function App () {
	React.useEffect(() => {
		fetch("http://127.0.0.1:1997/")
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
	}, []);

	return (
		<div className="min-h-screen bg-red-500 text-white flex">
			<h1 className="m-auto">Readmix</h1>
		</div>
	);
}

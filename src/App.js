import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () => {
	const APP_ID = '9ded2ab2';
	const APP_KEY = 'f07680a13914ca7181a979d4dd48afaf';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();

		setRecipes(data.hits);
		console.log(data.hits);
	};

	const upDateSearch = (e) => {
		setSearch(e.target.value);
		console.log(search);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div className='App'>
			<form className='search-form' onSubmit={getSearch}>
				<input
					className='search-bar'
					type='text'
					value={search}
					onChange={upDateSearch}
				/>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<div className='recipes'>
				{recipes.map((recipe) => (
					<Recipe
						key={Math.random()}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;

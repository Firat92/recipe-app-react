import classes from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={classes.recipe}>
			<h1>{title}</h1>
			<ul>
				{ingredients.map((ingredient, i) => (
					<li key={ingredient.foodId + i}>
						<span>{ingredient.text}</span>
					</li>
				))}
			</ul>
			<p>{calories.toFixed(2)} cal</p>
			<img src={image} alt='' className={classes.image} />
		</div>
	);
};

export default Recipe;

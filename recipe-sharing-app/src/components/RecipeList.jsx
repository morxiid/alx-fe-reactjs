import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import useRecipeStore from './useRecipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length > 0 ? (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              {/* Wrap the recipe name in a Link to navigate to the recipe details */}
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.name}</h3>
              </Link>
              <p>{recipe.description}</p>
              <p>Preparation Time: {recipe.preparationTime} minutes</p>
              <p>Ingredients: {recipe.ingredients}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
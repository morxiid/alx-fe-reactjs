import React from 'react';
import { useParams } from 'react-dom'
import useRecipeStore from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';


function RecipeDetails() {
    const { id } = useParams(); // Get the recipe ID from the URL
    const { recipes } = useRecipeStore();

    // Find the recipe with the matching ID
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instructions: {recipe.instructions}</p>
        <Link to={`/recipes/${id}/edit`}>Edit Recipe</Link>
        <DeleteRecipeButton id={recipe.id} />
      </div>
    );
  };

  export default RecipeDetails
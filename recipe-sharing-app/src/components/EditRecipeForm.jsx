import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function EditRecipeForm() {
    const { id } = useParams(); // Get the recipe ID from the URL
    const navigate = useNavigate();
    const { recipes, updateRecipe } = useRecipeStore();

    // Find the recipe with the matching ID
    const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

    // State for the form fields
    const [name, setName] = useState(recipe?.name || '');
    const [description, setDescription] = useState(recipe?.description || '');
    const [ingredients, setIngredients] = useState(recipe?.ingredients || '');
    const [instructions, setInstructions] = useState(recipe?.instructions || '');

    // Populate the form fields when the recipe is found
    useEffect(() => {
        if (recipe) {
            setName(recipe.name);
            setDescription(recipe.description);
            setIngredients(recipe.ingredients);
            setInstructions(recipe.instructions);
        }
    }, [recipe]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const updatedRecipe = {
            id: parseInt(id),
            name,
            description,
            ingredients,
            instructions,
        };
        updateRecipe(parseInt(id), updatedRecipe); // Update the recipe in the store
        navigate(`/recipes/${id}`); // Redirect to the recipe details page
    };

    // If the recipe is not found, display a message
    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
            </div>
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditRecipeForm;
import React from 'react';
import { useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ id }) {
    const navigate = useNavigate();
    const { deleteRecipe } = useRecipeStore();

    const handleDelete = () => {
        deleteRecipe(id);
        navigate('/'); // Redirect to the home page after deletion
    };

    return (
        <button onClick={handleDelete} style={{ color: 'red' }}>
            Delete Recipe
        </button>
    );
}

export default DeleteRecipeButton;
import useRecipeStore from "./recipeStore";

function DeleteRecipeButton(){
    const {deleteRecipe} = useRecipeStore()

    return(
        <div>
            <button onClick={deleteRecipe}>Delete</button>
        </div>
    )
}

export default DeleteRecipeButton
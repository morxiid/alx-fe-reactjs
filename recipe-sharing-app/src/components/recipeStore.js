import {create} from 'zustand'

const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes,newwRcipe]})),
    setRecipes: (recipes) => set({recipes})

    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter((recipes) => recipe.id !== id),
    })),

    updateRecipe: (id, updatedRecipe) => set(state => ({
        recipes: state.reccipes.map((recipes) =>
        recipe.id === id ? {...recipe, ...updatedRecipe} : recipe),
    }))
}));

export default useRecipeStore
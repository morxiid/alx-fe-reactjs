import {create} from 'zustand'

const useRecipeStore = create((set, get) => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipes: [...state.recipes,newRecipe]})),
    setRecipes: (recipes) => set({recipes}),
    updateRecipe: (id, updatedRecipe) => set(state => ({
        recipes: state.recipes.map((recipe) =>
        recipe.id === id ? {...recipe, ...updatedRecipe} : recipe)
    })),
    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
    searchTerm: '', // Search term for filtering
  filteredRecipes: [], // Filtered list of recipes

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on the search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },
  // Add more filters if needed (e.g., by ingredients or preparation time)
  filterByIngredients: (ingredient) => {
    const { recipes } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.ingredients.toLowerCase().includes(ingredient.toLowerCase())
      ),
    });
  },
  filterByPreparationTime: (maxTime) => {
    const { recipes } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.preparationTime <= maxTime
      ),
    });
  },

}));

export default useRecipeStore
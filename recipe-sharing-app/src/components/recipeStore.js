import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // List of all recipes
  favorites: [], // List of favorite recipe IDs
  recommendations: [], // List of recommended recipes
  addRecipe: [],
  updateRecipe: [],
  deleteRecipe: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
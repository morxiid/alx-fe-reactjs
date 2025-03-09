import {create} from 'zustand'

export const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newwRcipe) => set(state => ({recipes: [...state.recipes,newwRcipe]})),
    setRecipes: (recipes) => set({recipes})
}))
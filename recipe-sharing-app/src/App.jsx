import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail'; // Import RecipeDetail component
import AddRecipeForm from './components/AddRecipeForm'; // Import AddRecipeForm component
import EditRecipeForm from './components/EditRecipeForm'; // Import EditRecipeForm component
import Home from './components/Home'; // Import Home component (if you have one)

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Recipe List Route */}
        <Route path="/recipes" element={<RecipeList />} />

        {/* Add Recipe Route */}
        <Route path="/recipes/add" element={<AddRecipeForm />} />

        {/* Recipe Detail Route */}
        <Route path="/recipes/:id" element={<RecipeDetail />} />

        {/* Edit Recipe Route */}
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
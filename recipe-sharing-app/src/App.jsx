import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-dom';
import RecipeDetails from './components/recipeDetails';
import EditRecipeForm from './components/EditRecipeForm';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/recipes/:id" element={<RecipeDetails />} />
                <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
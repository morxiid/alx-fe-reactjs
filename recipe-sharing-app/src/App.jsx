import React from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import RecipeList from './RecipeList';

const RecipeApp = () => {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <Filters />
      <RecipeList />
    </div>
  );
};

export default RecipeApp;
import React from 'react';
import useRecipeStore from './useRecipeStore';

const Filters = () => {
  const filterByIngredients = useRecipeStore((state) => state.filterByIngredients);
  const filterByPreparationTime = useRecipeStore((state) => state.filterByPreparationTime);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by ingredient..."
        onChange={(e) => filterByIngredients(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by max preparation time (minutes)..."
        onChange={(e) => filterByPreparationTime(Number(e.target.value))}
      />
    </div>
  );
};

export default Filters;
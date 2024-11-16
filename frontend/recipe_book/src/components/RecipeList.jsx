import React from 'react';
import './styles/RecipeList.css';

function RecipeList({ recipes }) {
  return (
    <main className="recipe-list">
      <h2>Recipes</h2>
      {recipes ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      ) : (
        <p>Select a category to view recipes</p>
      )}
    </main>
  );
};

export default RecipeList;
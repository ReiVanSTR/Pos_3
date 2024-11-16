import React from 'react';
import './styles/CategoryList.css';

function CategoryList ({ categories, onSelect }) {
  return (
    <aside className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onSelect(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryList;
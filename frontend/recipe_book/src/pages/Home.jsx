// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading'; // Import the Loading component
import '../styles/Home.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openTabs, setOpenTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const categories = [
    { name: 'Drink of month', recipes: ['DM Wrzesien', 'DM Pazdziernik', 'DM Another', 'DM Another'] },
    { name: 'Stable menu', recipes: ['Mojito', 'Mojito virgin', 'Old fashioned', 'Negroni'] },
    { name: 'Prepares', recipes: ['Radler lemonade 1', 'Radler lemonade 2', 'Another', 'Another2'] },
    { name: 'Deal drinks', recipes: ['Halloween', 'Beer Day', 'Valentine day 2023', 'Smth ...'] }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  const handleRecipeClick = (recipeName) => {
    if (!openTabs.includes(recipeName)) {
      if (openTabs.length < 10) {
        setOpenTabs([...openTabs, recipeName]);
        setActiveTab(recipeName);
      } else {
        alert('Maximum of 10 recipes open at once.');
      }
    } else {
      setActiveTab(recipeName);
    }
  };

  const closeTab = (recipeName) => {
    const updatedTabs = openTabs.filter((tab) => tab !== recipeName);
    setOpenTabs(updatedTabs);
    if (activeTab === recipeName) {
      setActiveTab(updatedTabs.length > 0 ? updatedTabs[updatedTabs.length - 1] : null);
    }
  };

  return (
    <div className="home-page">
      {isLoading ? (
        <Loading />  // Use Loading component here
      ) : (
        <>
          <Header />
          <div className="main-content">
            <div className="category-list">
              <h2>Categories</h2>
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <div
                      className="category-item"
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      {category.name}
                    </div>
                    {selectedCategory === category.name && (
                      <ul className="recipe-list-dropdown">
                        {category.recipes.map((recipe, index) => (
                          <li
                            key={index}
                            className="recipe-item"
                            onClick={() => handleRecipeClick(recipe)}
                          >
                            {recipe}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="recipe-display">
              <div className={`tab-bar ${openTabs.length > 8 ? 'small-tabs' : ''}`}>
                {openTabs.length > 0 ? (
                  openTabs.map((recipe, index) => (
                    <div
                      key={index}
                      className={`tab ${activeTab === recipe ? 'active' : ''}`}
                      onClick={() => setActiveTab(recipe)}
                    >
                      {recipe}
                      <span
                        className="close-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          closeTab(recipe);
                        }}
                      >
                        ✕
                      </span>
                    </div>
                  ))
                ) : (
                  <span className="no-tabs-message">No recipes open</span>
                )}
              </div>

              <div className="recipe-content">
                <h2>{activeTab ? activeTab : 'Select a Recipe'}</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

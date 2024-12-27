const recipes = [
    {
      name: "Spaghetti Bolognese",
      image: "https://via.placeholder.com/300x200",
      description: "A classic Italian pasta dish with rich meat sauce."
    },
    {
      name: "Chicken Curry",
      image: "https://via.placeholder.com/300x200",
      description: "A flavorful curry with tender chicken pieces."
    },
    {
      name: "Veggie Stir-fry",
      image: "https://via.placeholder.com/300x200",
      description: "A healthy mix of vegetables sautéed with soy sauce."
    },
    {
      name: "Pancakes",
      image: "https://via.placeholder.com/300x200",
      description: "Fluffy pancakes perfect for breakfast."
    },
  ];
  const recipeContainer = document.getElementById("recipe-container");

  function displayRecipes(recipesToDisplay) {
    recipeContainer.innerHTML = ""; // Clear existing recipes
    recipesToDisplay.forEach(recipe => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" />
        <div class="recipe-info">
          <h2>${recipe.name}</h2>
          <p>${recipe.description}</p>
        </div>
      `;
      recipeContainer.appendChild(recipeCard);
    });
  }
  
  // Initial display of recipes
  displayRecipes(recipes);
  
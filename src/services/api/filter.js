import axios from 'axios';

async function GetRecipesbyName(name) {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/search?q=${name}`)
      const recipes = response.data.recipes
      
      const recipesList = recipes.map(recipe => {
        return {
          id: recipe.id,
          title: recipe.name,
          image: recipe.image,
          category: recipe.tags.join(' '),
          description: recipe.instructions.slice(0, 2).join(' ')
        };
      });
      
      return recipesList;

    } catch (error) {
      console.error('Error fetching data:', error)
      return []
    }
  }

async function GetRecipesbyDiffculty(difficulty) {
  try {
    const response = await axios.get(`https://dummyjson.com/recipes`)
    const recipes = response.data.recipes
    const filteredRecipes = recipes.filter(recipe => recipe.difficulty === difficulty);
    
    const recipesList = filteredRecipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.name,
        image: recipe.image,
        category: recipe.tags.join(' '),
        description: recipe.instructions.slice(0, 2).join(' ')
      };
    });
    
    return recipesList;

  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

async function GetRecipesbyTags(Tags) {
  try {
    const response = await axios.get(`https://dummyjson.com/recipes/tag/${Tags}`)
    const recipes = response.data.recipes
    
    const recipesList = filteredRecipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.name,
        image: recipe.image,
        category: recipe.tags.join(' '),
        description: recipe.instructions.slice(0, 2).join(' ')
      };
    });
    
    return recipesList;

  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

async function getAllTags() {
  try {
    const response = await axios.get(`https://dummyjson.com/recipes/tags`)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}

export { GetRecipesbyName, GetRecipesbyDiffculty, GetRecipesbyTags, getAllTags };
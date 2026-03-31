import axios from 'axios'

async function fetchRecipeData(id) {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`)
      const recipe = response.data

      const recipeData = {
        id: recipe.id,
        title: recipe.name,
        image: recipe.image,
        type: recipe.cuisine,
        descriptionText: recipe.instructions,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        tags : recipe.tags
      };
      return recipeData;
    } catch (error) {
      console.error('Error fetching recipe data:', error)
      throw error;
    }
  }

export default fetchRecipeData
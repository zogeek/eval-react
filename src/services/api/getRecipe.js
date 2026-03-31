import axios from 'axios'

async function fetchRecipeData(id) {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`)
      const recipe = response.data

      const recipeData = {
        id: recipe.id,
        name: recipe.name,
        image: recipe.image,
        type: recipe.cuisine,
        descriptionText: recipe.instructions.slice(0, 2).join(' ')
      };
      console.log(recipeData);
      return recipeData;
    } catch (error) {
      console.error('Error fetching recipe data:', error)
      throw error;
    }
  }

export default fetchRecipeData
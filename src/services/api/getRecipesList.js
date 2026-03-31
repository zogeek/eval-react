import axios from 'axios';

async function fetchDataList() {
    try {
      const response = await axios.get('https://dummyjson.com/recipes?limit=0')
      const recipes = response.data.recipes
      
      const recipesList = recipes.map(recipe => {
        return {
          id: recipe.id,
          title: recipe.name,
          image: recipe.image,
          category: recipe.tags.join(', '),
          description: recipe.instructions.slice(0, 2).join(' '),
          difficulty: recipe.difficulty,
          tags: recipe.tags
        };
      });
      
      return recipesList;

    } catch (error) {
      console.error('Error fetching data:', error)
      return []
    }
  }

export default fetchDataList
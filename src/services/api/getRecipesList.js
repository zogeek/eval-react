async function fetchDataList() {
    try {
      const response = await axios.get('https://dummyjson.com/recipes?limit=0')
      const recipes = response.data.recipes
      recipes.forEach(recipe => {
        const id = recipe.id
        const name = recipe.name
        const image = recipe.image
        const type = recipe.cuisine

        const description = recipe.instructions.slice(0, 2);
        const descriptionText = description.map(instructions => instructions).join(' ');

        const recipeData = {
          id,
          name,
          image,
          type,
          descriptionText
        };
        console.log(recipeData);        
      });

    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

export default fetchDataList
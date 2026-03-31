import "./list.css"
import Card from "../Card/card"

const List = ({ recipes = [] }) => {
    return (
        <div className="recipe-container">
            <h1>Toutes les Recettes</h1>
            {recipes.length === 0 ? (
                <p>Aucune recette trouvée</p>
            ) : (
                <div className="recipes-list">
                    {recipes.map((recipe) => (
                        <Card
                            key={recipe.id}
                            recipe={recipe}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default List;
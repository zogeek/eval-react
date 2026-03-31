import "./favoris.css"
import Card from "../Card/card"

const FavorisList = ({ favorites = [] }) => {
    return (
        <div className="favoris-container">
            <h1>Mes Favoris</h1>
            {favorites.length === 0 ? (
                <p>Aucune recette favorite</p>
            ) : (
                <div className="favorites-grid">
                    {favorites.map((recipe) => (
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

export default FavorisList;
import "./favoris.css"
import { useState, useEffect } from "react"
import { getFavoris } from "../Storage/storage"
import Card from "../Card/card"

const FavorisList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = getFavoris();
    setFavorites(data);
  }, []);

    return (
        <div className="favoris-container">
            <h1>Mes Favoris</h1>
            {favorites.length === 0 ? (
                <p>Aucune recette favorite</p>
            ) : (
                <div className="favoris-grid">
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

console.log(getFavorites());

export default FavorisList;
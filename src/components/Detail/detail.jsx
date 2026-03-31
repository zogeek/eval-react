import "./detail.css"

    const Detail = ({ recipe }) => {
        const AjtFavorite = () => {
        
        }

        if (!recipe) {
            return (
                <div className="detail-recipe">
                    <p>Chargement...</p>
                </div>
            )
        }
        
        return (
            <>
                <div className="detail-recipe">
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} />
                    <p>{recipe.description}</p>
                    <div className="card-info">
                        <div className="ingredient">
                            <strong>Ingrédients:</strong>
                            <p>{(recipe.ingredients ?? []).join(', ')}</p>
                        </div>
                        <div className="instructions">
                            <strong>Instructions:</strong>
                         <p>{(recipe.instructions ?? []).join(' ')}</p>
                        </div>
                    </div>
                    <div className="card-button">
                        <button className="fav-button" onClick={AjtFavorite}>
                            Ajouter au favoris
                        </button>
                        <button className="retour-button">
                            Retour a la Liste
                        </button>
                    </div>
                </div>
            </>
        )
    }

export default Detail;
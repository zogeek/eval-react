import "./detail.css"

    const Detail = ({ recipeTitle, recipeDescription, recipeImage, recipeIngredient, recipeInstructions }) => {
        const AjtFavorite = () => {
        
        }
        
        return (
            <>
                <div className="detail-recipe">
                    <h2>{recipeTitle}</h2>
                    <img src={recipeImage} />
                    <p>{recipeDescription}</p>
                    <div className="card-info">
                        <div className="ingredient">
                            <strong>Ingrédients:</strong>
                            <p>{recipe.ingredient}</p>
                        </div>
                        <div className="instructions">
                            <strong>Instructions:</strong>
                         <p>{recipe.instructions}</p>
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
import "./detail.css"
import { useNavigate } from "react-router-dom"

    const Detail = ({ recipe }) => {
        const navigate = useNavigate()

        const AjtFavorite = () => {
        
        }

        const handleRetour = () => {
            navigate(-1)
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
                    <div className="detail-container">
                        <div className="detail-img-title">
                            <img src={recipe.image} />
                        </div>
                        <div className="detail-category-description">
                            
                            <p>{recipe.description}</p>
                            <div className="card-info">
                                <div className="ingredient">
                                    <h3>Ingrédients:</h3>
                                    <p>{(recipe.ingredients ?? []).join(', ')}</p>
                                </div>
                                <div className="instructions">
                                    <h3>Instructions:</h3>
                                    <p>{(recipe.instructions ?? []).join(' ')}</p>
                                </div>
                            </div>
                            <div className="card-button">
                                <button className="fav-button" onClick={AjtFavorite}>
                                    Ajouter au favoris
                                </button>
                                <button className="retour-button" onClick={handleRetour}>
                                    Retour a la Liste
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Detail;
import "./card.css"
import { useNavigate } from "react-router-dom"
import { saveFavoris } from "../../services/api/storage"

    const Card = ({ recipe }) => {
    const navigate = useNavigate()

    const VoirDetails = () => {
        navigate(`/list/${recipe.id}`)
    }

    const AjtFavorite = () => {
        saveFavoris(recipe);
    }
        
        return (
            <>
                <div className="card">
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} width={"100px"} />
                    <p>{recipe.category}</p>
                    <p>{recipe.description}</p>
                    <div className="card-button">
                        <button className="fav-button" onClick={AjtFavorite}>
                            Ajouter au favoris
                        </button>
                        <button className="details-button" onClick={VoirDetails}>
                            Voir les details
                        </button>
                    </div>
                </div>
            </>
        )
    }

export default Card;
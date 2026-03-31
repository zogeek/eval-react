import "./card.css"

    const Card = ({ recipeTitle, recipeDescription, recipeImage, recipeCategory }) => {
    const VoirDetails = () => {
        navigate(`/list/${recipe.id}`)
    }

    const AjtFavorite = () => {
        
    }
        
        return (
            <>
                <div className="card">
                    <h2>{recipeTitle}</h2>
                    <img src={recipeImage} />
                    <p>{recipeDescription}</p>
                    <p>{recipeCategory}</p>
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
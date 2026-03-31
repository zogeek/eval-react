import "./card.css"

    const Card = ({ recipe }) => {
    const VoirDetails = () => {
        navigate(`/list/${recipe.id}`)
    }

    const AjtFavorite = () => {
        
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
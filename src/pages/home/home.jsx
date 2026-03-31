import "./home.css"
import { useNavigate } from "react-router-dom";

export default function home() {
    const navigate = useNavigate()
    return (
        <>  
            <div className="home">
                <h1>Bienvenue notre livre de recette</h1>
                <div className="home-buttons">
                    <button onClick={() => navigate("/list")}>
                        Liste de recette
                    </button>
                    <button onClick={() => navigate("/favoris")}>
                        Liste des favoris
                    </button>
                </div>
            </div>
        </>
    )
}
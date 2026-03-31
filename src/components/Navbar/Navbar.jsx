import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="link">
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/list">Liste des Recettes</NavLink>
                <NavLink className="navlink" to="/favoris">Favoris</NavLink>
            </div>
        </div>
    )
}
import "./SearchBar.css"

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Rechercher une recette..." />
            <button>Rechercher</button>
        </div>
    )
}

export default SearchBar;
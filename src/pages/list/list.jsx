import "./list.css";
import List from "../../components/List/List.jsx";
import { useEffect, useState } from "react";
import fetchDataList from "../../services/api/getRecipesList.js";
import {getAllTags}  from "../../services/api/filter.js";

export default function ListPage() {
    const [data, setData] = useState([]);
    const [AllData, setAllData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const recipes = await fetchDataList();
            setAllData(recipes);
            setData(recipes);

            const allTags = await getAllTags();
            setTags(allTags);
        };
        fetchData();
    }, []);
    console.log(tags);

   useEffect(() => {
        let filtered = AllData;
        if (searchTerm) {
            filtered = filtered.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (difficulty) {
            filtered = filtered.filter(recipe =>
                recipe.difficulty.toLowerCase() === difficulty
            );
        }

        if (selectedTag) {
            filtered = filtered.filter(recipe =>
                recipe.tags.includes(selectedTag)
            );
        }

        setData(filtered);
    }, [searchTerm, difficulty, AllData, selectedTag]);


    return (
        <>
            <div className="list-page">
                <h1>Toutes les Recettes</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Rechercher une recette..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="filters">
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select
                        id="difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="">Tous les niveaux</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <label htmlFor="tags">Tags:</label>
                <select
                    id="tags"
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                >
                    <option value="">Tous les tags</option>
                    {tags.map(tag => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
                </div>
                <List recipes={data} />
            </div>
        </>
    );
}

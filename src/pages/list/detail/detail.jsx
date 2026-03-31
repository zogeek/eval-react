import "./detail.css"
import Detail from "../../../components/Detail/detail.jsx"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchRecipeData from "../../../services/api/getRecipe.js";

export default function DetailPage() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const getRecipe = async () => {
            const recipeData = await fetchRecipeData(id);
            setRecipe(recipeData)
        }

        if (id) {
            getRecipe()
        }
    }, [id]);

    console.log(recipe);

    return (
        <>
            <Detail recipe={recipe} />
        </>
    )
}
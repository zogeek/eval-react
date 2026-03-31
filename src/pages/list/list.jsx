import "./list.css"
import List from "../../components/List/List.jsx"
import { useEffect, useState } from "react";
import fetchDataList from "../../services/api/getRecipesList.js";

export default function ListPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const recipes = await fetchDataList();
            setData(recipes)
        }
        fetchData()
    }, []);

    return (
        <>
            <List recipes={data} />
        </>
    )
}
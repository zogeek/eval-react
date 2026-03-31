import "./list.css"
import List from "../../components/List/List.jsx"
import { useEffect } from "react";
import fetchDataList from "../../services/api/getRecipesList.js";

export default function list() {
    
  useEffect(() => {
    fetchDataList();
  }, []);
    return (
        <>
            <List/>
        </>
    )
}
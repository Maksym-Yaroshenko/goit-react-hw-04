import { useState } from "react";
import { getArticles } from "../articles-api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [articles, setArticles] = useState([]);
  const handleSearch = async (topic) => {
    try {
      const fetchArticles = await getArticles(topic);
      setArticles(fetchArticles);
      console.log(articles);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;

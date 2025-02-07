import React, { useState } from "react";
import axios from "axios";
import MangaList from "../components/MangaList";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search?query=${query}`);
      setResults(response.data);
    } catch (err) {
      console.error("Failed to fetch search results", err);
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for manga..."
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        <MangaList manga={results} />
      </div>
    </div>
  );
};

export default SearchPage;

import React, { useState } from "react";

const SearchManga = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchManga = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/manga?q=${query}`);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error("Error fetching manga:", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a manga..."
      />
      <button onClick={searchManga}>Search</button>
      <ul>
        {results.map((manga) => (
          <li key={manga.mal_id}>
            <img src={manga.images.jpg.image_url} alt={manga.title} />
            <h3>{manga.title}</h3>
            <p>{manga.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchManga;

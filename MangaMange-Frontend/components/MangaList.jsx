import React from "react";
import axios from "axios";

const MangaList = ({ manga }) => {
  const handleAddToReadingList = async (mangaItem) => {
    try {
      await axios.post("http://localhost:5000/api/reading-list", mangaItem);
      alert("Manga added to reading list!");
    } catch (err) {
      console.error("Failed to add manga to reading list", err);
    }
  };

  return (
    <div className="manga-list">
      {manga.map((item) => (
        <div key={item.id} className="manga-card">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <button onClick={() => handleAddToReadingList(item)}>Add to Reading List</button>
        </div>
      ))}
    </div>
  );
};

export default MangaList;

import React from "react";
import axios from "axios";

const MangaCardPage = () => {
  const handleAddToReadingList = async () => {
    try {
      await axios.post("http://localhost:5000/api/reading-list", {
        // Add manga data here
      });
      alert("Manga added to reading list!");
    } catch (err) {
      console.error("Failed to add manga to reading list", err);
    }
  };

  return (
    <div>
      <h1>Manga Card Page</h1>
      <div className="manga-card">
        <img src="path/to/manga-image.jpg" alt="Manga" />
        <h2>Manga Title</h2>
        <button onClick={handleAddToReadingList}>Add to Reading List</button>
      </div>
    </div>
  );
};

export default MangaCardPage;

import React from "react";

const MangaCardPage = () => {
  return (
    <div>
      <h1>Manga Card Page</h1>
      <div className="manga-card">
        <img src="path/to/manga-image.jpg" alt="Manga" />
        <h2>Manga Title</h2>
        <button>Add to Reading List</button>
      </div>
    </div>
  );
};

export default MangaCardPage;

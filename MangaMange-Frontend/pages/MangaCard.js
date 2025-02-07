import React from "react";
import { Link } from "react-router-dom";

const MangaCard = ({ manga }) => {
  return (
    <div className="manga-card">
      <img src={manga.image} alt={manga.title} />
      <h3>{manga.title}</h3>
      <p>{manga.author}</p>
      <Link to={`/manga/${manga._id}`}>View Details</Link>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};

export default MangaCard;
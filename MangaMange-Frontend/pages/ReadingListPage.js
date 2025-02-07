import React from "react";
import MangaList from "../components/MangaList";

const ReadingListPage = () => {
  const readingList = [
    // Example manga data
    { id: 1, title: "Manga 1", image: "path/to/manga1.jpg" },
    { id: 2, title: "Manga 2", image: "path/to/manga2.jpg" },
    // Add more manga data as needed
  ];

  return (
    <div>
      <h1>Reading List</h1>
      <div className="carousel">
        <MangaList manga={readingList} />
      </div>
    </div>
  );
};

export default ReadingListPage;

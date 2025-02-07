import React, { useEffect, useState } from "react";
import MangaList from "../components/MangaList";

const ReadingList = () => {
  const [likedManga, setLikedManga] = useState([]);

  useEffect(() => {
    const fetchLikedManga = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reading-list");

        if (!response.ok) {
          throw new Error("Failed to fetch liked manga");
        }

        const data = await response.json();
        setLikedManga(data.likedManga);
      } catch (error) {
        console.error("Error fetching liked manga:", error);
      }
    };

    fetchLikedManga();
  }, []);

  return (
    <div>
      <h1>Reading List</h1>
      <MangaList manga={likedManga} />
    </div>
  );
};

export default ReadingList;

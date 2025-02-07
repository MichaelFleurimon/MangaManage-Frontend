import React, { useEffect, useState } from "react";

const ReadingList = () => {
  const [addedManga, userList] = useState([]);

  useEffect(() => {
    const userList = async () => {
      try {
        const response = await fetch("");

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

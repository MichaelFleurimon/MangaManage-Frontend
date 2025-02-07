import React, { useEffect, useState } from "react";
import MangaList from "../components/MangaList";

const ReadingListPage = () => {
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const fetchReadingList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reading-list");
        setReadingList(response.data);
      } catch (err) {
        console.error("Failed to fetch reading list", err);
      }
    };
    fetchReadingList();
  }, []);

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

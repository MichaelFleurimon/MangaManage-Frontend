import React, { useEffect, useState } from "react";
import axios from "axios";
import MangaList from "../components/MangaList";

const Home = () => {
  const [manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/manga");
        setManga(response.data);
      } catch (err) {
        setError("Failed to fetch manga data.");
      } finally {
        setLoading(false);
      }
    };
    fetchManga();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>MangaManage</h1>
      <MangaList manga={manga} />
    </div>
  );
};

export default Home;

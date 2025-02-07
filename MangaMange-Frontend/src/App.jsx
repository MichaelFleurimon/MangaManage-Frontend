import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/NavBar.jsx";
import Home from "../pages/homepage.jsx"; // Updated import path
import ReadingList from "../pages/ReadingList.jsx";
import SearchManga from "../pages/Search.jsx";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will be included on every page */}
      <div style={styles.pageContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading-list" element={<ReadingList />} />
          <Route path="/search" element={<SearchManga />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  pageContainer: {
    padding: "20px",
  },
};

export default App;


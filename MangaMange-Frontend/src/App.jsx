import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/NavBar";
 import Home from "../pages/homepage";
 import ReadingList from "../pages/ReadingList";
 import SearchManga from "../pages/Search";

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


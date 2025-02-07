import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/homepage";
import MangaCardPage from "../pages/MangaCardPage";
import ReadingListPage from "../pages/ReadingListPage";
import SearchPage from "../pages/SearchPage";
import NavBar from "../components/NavBar.jsx"; // Updated import path

const App = () => {
  return (
    <Router>
      <NavBar />
      <div style={styles.pageContainer}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/manga-card" component={MangaCardPage} />
          <Route path="/reading-list" component={ReadingListPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
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

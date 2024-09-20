import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Stocks from "./component/Stocks";
import Watchlist from "./component/Watchlist";

const App = () => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (stock) => {
    fetch("http://localhost:5000/api/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setWatchlist((prevWatchlist) => [...prevWatchlist, stock]);
      })
      .catch((error) => console.error("Error adding to watchlist:", error));
  };

  return (
    <Router>
      <nav>
        <Link to="/">Stocks</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Stocks addToWatchlist={addToWatchlist} />} />
        <Route
          path="/watchlist"
          element={<Watchlist watchlist={watchlist} />}
        />
        {/* Redirect root path to /stocks */}
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;

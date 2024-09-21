import React from "react";

const Watchlist = ({ watchlist }) => {
  const getRandomColor = () => {
    let colors = ["#FF0000", "#00FF00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="watchlist-container">
      <h1>Stock Market MERN App</h1>
      <h2>My Watchlist</h2>
      <ul className="watchlist-list">
        {watchlist.map((stock, i) => (
          <li key={i} className="watchlist-item">
            {stock.company} ({stock.symbol}) -{" "}
            <span style={{ color: getRandomColor() }}>
              ${stock.initial_price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;

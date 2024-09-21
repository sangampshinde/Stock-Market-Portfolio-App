import React, { useState, useEffect } from 'react';

const Stocks = ({ addToWatchlist }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from the backend
    fetch("https://stock-market-portfolio-app.onrender.com/api/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data))
      .catch((err) => console.error("Error fetching stocks:", err));
  }, []);

  const getRandomColor = () => {
    let colors = ["#FF0000", "#00FF00"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="stocks-container">
      <h1>Stock Market MERN App</h1>
      <h2>Stocks</h2>
      <ul className="stocks-list">
        {stocks.map((stock, i) => (
          <li key={i} className="stock-item">
            <div>
           <p className=''> {stock.company} ({stock.symbol}) - {" "} 
            <span style={{ color: getRandomColor() }}>
              ${stock.initial_price}
            </span></p>
            <button onClick={() => addToWatchlist(stock)}>Add to Watchlist</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stocks;

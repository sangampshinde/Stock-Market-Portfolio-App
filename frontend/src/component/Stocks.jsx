import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Stocks = ({ addToWatchlist }) => {
    const [stocks, setStocks] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      // Fetch stock data from the backend
        fetch("http://localhost:5000/api/stocks")
        .then(response=>response.json())
        .then(data=>setStocks(data))
        .catch(err=>console.error("Error fetching stocks:", err));
    },[]);

    console.log(setStocks, "Stocksdata");

    const getRandomColor = () => {
      let colors = ["#FF0000", "#00FF00"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

  return (
  <>
  <div className="App">
       <h1>Stock Market MERN App</h1>
       <h2>Stocks</h2>
       <ul>
        {
          stocks.map((stock, i) =>(
            <li key={i}>
              {stock.company} ({stock.symbol})- <span style={{ color: getRandomColor() }}>
              {" "}
              {stock.initial_price}
              </span>
              <button onClick={()=>{addToWatchlist(stock)}}>Add to My Watchlist</button>
            </li>
          )
          )}
       </ul>

  </div>
  </>
)}

export default Stocks;
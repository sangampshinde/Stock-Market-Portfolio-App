import React from 'react'

const Stock = () => {
  return (
    <>
    <div>
        <p className=''> {stock.company} ({stock.symbol}) - {" "} <span style={{ color: getRandomColor() }}>${stock.initial_price}</span></p>
        <p><button onClick={() => addToWatchlist(stock)}>Add to Watchlist</button></p>
    </div>
    </>
    
  )
}

export default Stock
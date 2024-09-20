const Stocks = require('../models/stock.js');

const getAllStock = async(req,res) =>{
    try {
        const stocks = await Stocks.find();
        res.json(stocks);
    } catch (error) {
        console.error(error);
        res.status(500).json({error:'Internal Server Error'});
    }
};

const AddStockToWishlist = async(req,res)=>{
    try {
        const {
            company,
            description,
            initial_price,
            price_2002,
            price_2007,
            symbol,  
        } = req.body;

        const stock = new Stocks({
            company,
            description,
            initial_price,
            price_2002,
            price_2007,
            symbol,
        })

        await stock.save();
        res.json({message:"Stock added to watchlist successfully"}); 

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = { getAllStock, AddStockToWishlist };
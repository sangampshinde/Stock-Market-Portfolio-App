const express = require('express');
const{ getAllStock, AddStockToWishlist }= require('../controllers/stockController.js');

const router = express.Router();


router.get('/stocks',getAllStock);

router.post("/watchlist",AddStockToWishlist);

module.exports = router;




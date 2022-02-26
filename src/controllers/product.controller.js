const express = require('express');
const router = express.Router();

const path = require('path');

router.get('', async (req, res) => {
    try {
        //const products = await Product.find().lean().exec();
        var options = {
            root: path.join(__dirname, ".../FrontEnd")
        };
        var fileName = 'product.html';
        res.sendFile(fileName, "C:\Users\ranas\OneDrive\Documents\GitHub\Banggood-rana53\FrontEnd");
      
        // return res.send(products);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get('/cart', async (req, res) => {
    try {
        //const products = await Product.find().lean().exec();
        var options = {
            root: path.join(__dirname, ".../FrontEnd")
        };
        var fileName = 'cart.html';
        res.sendFile(fileName, "C:\Users\ranas\OneDrive\Documents\GitHub\Banggood-rana53\FrontEnd");
      
        // return res.send(products);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;
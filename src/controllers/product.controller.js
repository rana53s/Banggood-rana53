const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find().lean().exec();
        return res.send(products);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});


module.exports = router;
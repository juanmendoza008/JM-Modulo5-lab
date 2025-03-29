const express = require('express');
const router = express.Router();

router.get('/product', (req, res) => {
    res.send([
        { id: 1, name: "vanilla scoop", price: 4.5, qtyRemaining: 10 },
    ])
})

module.exports = router;
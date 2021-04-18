const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('user/reg');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.end(`Welcome ${req.body.name} (${req.body.email})`);
});

module.exports = router;
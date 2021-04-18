const express = require('express');
const Admin = require('..//models/admin');
const router = express.Router();

router.get('/', function(req, res) {
    delete req.session.adminId;
    res.redirect('/');
});

module.exports = router;
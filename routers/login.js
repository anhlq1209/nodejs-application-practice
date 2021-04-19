const asyncHandler = require('express-async-handler');
const express = require('express');
const Admin = require('../models/admin');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('user/login');
});

router.post('/', asyncHandler(async function(req, res) {
    const { username, password } = req.body;
    const found = await Admin.findByUserName(username);
    if (found && (found.password === password)) {
        req.session.adminId = found.id;
        res.redirect('/');
    } else {
        res.send('Login failed!');
    }
}));

module.exports = router;
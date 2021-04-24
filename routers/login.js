const asyncHandler = require('express-async-handler');
const express = require('express');
const bcryptjs = require('bcryptjs');
const Admin = require('../models/admin');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('user/login');
});

router.post('/', asyncHandler(async function(req, res) {
    const { username, password } = req.body;
    const found = await Admin.findByUserName(username);
    console.log(await Admin.findByUserName(username));
    if (found && bcryptjs.compareSync(password, found.password)) {
        req.session.adminId = found.id;

        res.redirect('/');
    } else {
        console.log()
        res.send('Login failed!');
    }
}));

module.exports = router;
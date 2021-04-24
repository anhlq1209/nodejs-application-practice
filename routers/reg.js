const express = require('express');
const router = express.Router();
const Member = require('../models/member');

router.get('/', function(req, res) {
    res.render('user/reg');
});

router.post('/', (req, res) => {
    const { nameMem, emailMem, attendMem } = req.body;

    (async function() {
        await Member.create({
            name: nameMem,
            email: emailMem,
            attend: attendMem ? true : false,
        });
    })().catch(console.error);

    res.redirect('/reg');
});

module.exports = router;
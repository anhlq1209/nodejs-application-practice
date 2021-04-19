const asyncHaadler = require('express-async-handler');
const Admin = require('../models/admin');

module.exports = asyncHaandler(async function(req, res, next) {
    const { adminId } = req.session;
    if (adminId) {
        const admin = await Admin.findById(adminId);
        if (admin) {
            res.locals.currentAdmin = admin;
        }
    }
    next();
});
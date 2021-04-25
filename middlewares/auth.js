const asyncHandler = require('express-async-handler');
const Admin = require('../models/admin');
const Member = require('../models/member');

module.exports = asyncHandler(async function(req, res, next) {
    const { adminId } = req.session;
    if (adminId) {
        const admin = await Admin.findById(adminId);
        if (admin) {
            req.currentAdmin = admin;
            res.locals.currentAdmin = admin;
            const members = await Member.findAll();
            res.locals.currentListMember = members;
        }
    }
    next();
});
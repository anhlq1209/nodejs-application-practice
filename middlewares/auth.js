const Admin = require('../models/admin');

module.exports = function(req, res, next) {
    const { adminId } = req.session;
    if (adminId) {
        const admin = Admin.findById(adminId);
        if (admin) {
            res.locals.currentAdmin = admin;
        }
    }
    next();
};
const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const Admin = db.define('Admins', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Admin.findById = async function(id) {
    return Admin.findByPk(id);
};

Admin.findByUserName = async function(username) {
    return Admin.findOne({
        where: {
            username,
        },
    });
};

module.exports = Admin;
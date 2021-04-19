const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('Users', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    attend: {
        type: DataTypes.STRING,
        defaultValue: false,
        allowNull: false
    }
});

User.findById = async function(id) {
    return User.findByPk(id);
};

User.findByEmail = async function(email) {
    return User.findOne({
        where: {
            email,
        },
    });
};

module.exports = User;
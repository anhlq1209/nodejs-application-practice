const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/db');

const Member = db.define('Members', {
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

Member.findById = async function(id) {
    return Member.findByPk(id);
};

Member.findByEmail = async function(email) {
    return Member.findOne({
        where: {
            email,
        },
    });
};

module.exports = Member;
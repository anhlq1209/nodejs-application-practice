const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:anhlq1209@localhost:5432/postgres', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: process.env.DATABASE_URL ? true : false
            /* ssl: {
                rejectUnauthorized: false,
            } */
    }
});
const db = require('./');

async function(req, res) {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (console.error);
}
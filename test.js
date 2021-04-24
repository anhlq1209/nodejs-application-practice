//         Conection DB, test DB, 

const Admin = require('./models/admin');
const Member = require('./models/member');
const db = require('./config/db');

(async function() {
    await db.authenticate();

    await db.sync();

    await Admin.create({
        name: 'Quoc Anh',
        username: 'admin',
        password: '$2b$10$Kw8jJOIWQC1l2c40AaW6..UgVRIBIDavVVpnf8nLomeAhdeWvvrQ2'
    });
})().catch(console.error);
// Modules
const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cookieSession = require('cookie-session');

app = express();

// Routers
const loginRouter = require('./routers/login');
const logoutRouter = require('./routers/logout');
const regRouter = require('./routers/reg');

// Middlewares
const authMiddleware = require('./middlewares/auth');

// Models
const Admin = require('./models/admin');
const Member = require('./models/member');

// Database
const db = require('./config/db');

// Session
app.use(cookieSession({
    name: 'session', // Session name
    keys: [process.env.COOKIE_KEY || 'secret'], //
    maxAge: 24 * 60 * 60 * 1000, // Time 24 hours
}, {
    name: 'temporary',
    keys: [process.env.COOKIE_KEY || 'tempo'],
    maxAge: 1000,
}));

//Use Middleware
app.use(authMiddleware);

//Use Express Ejs Layouts
app.use(expressLayouts);

//Use Express Static
app.use(express.static('public'));

//Use Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

//Use EJS
app.set('views', './views');
app.set('view engine', 'ejs');

// Use Routers
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/reg', regRouter);

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/admin', function(req, res) {
    res.render('user/admin');
});

(async function() {
    await db.sync();

    const userAdmin = await Admin.findByUserName('admin');

    if (userAdmin == null) {
        await Admin.create({
            name: 'Lê Quốc Anh',
            username: 'admin',
            password: '$2b$10$.veZQPdZyBtPBrDPrrQH0uDF8HBj3XjSGwZJepDNCh2QdJDOJ0wAm'
        });
    }

    const port = process.env.PORT || 3002;
    app.listen(port, () => { console.log(`Example app listening on port ${port}!`); });
})().catch(console.error);
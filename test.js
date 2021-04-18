// Modules
const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cookieSession = require('cookie-session');

// Routers
const loginRouter = require('./routers/login');
const logoutRouter = require('./routers/logout');
const regRouter = require('./routers/reg');

// Middlewares
const authMiddleware = require('./middlewares/auth');

app = express();

// Session
app.use(cookieSession({
    name: 'session', // Session name
    keys: [process.env.COOKIE_KEY || 'secret'], //
    maxAge: 24 * 60 * 60 * 1000, // Time 24 hours
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
    res.render('auth/home');
});

app.get('/logins', function(req, res) {
    res.render('user/login-test');
});

const port = process.env.PORT || 3003;
app.listen(port, () => { console.log(`Example app listening on port ${port}!`); });
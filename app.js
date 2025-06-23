const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/auth', require('./routes/auth'));
app.use('/theme', require('./routes/theme'));
app.use('/protected', require('./routes/protected'));

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/', (req, res) => {
  res.render('index', { theme: req.cookies.theme || 'light' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

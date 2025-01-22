const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/', usersRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
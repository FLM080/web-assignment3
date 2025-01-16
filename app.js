const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;

const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
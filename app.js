const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
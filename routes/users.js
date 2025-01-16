const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.render('showUsers', { currentRoute: '/users'});
});

module.exports = router;
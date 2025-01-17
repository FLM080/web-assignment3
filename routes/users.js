const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const currentRoute = '/users';

router.get('/users', (req, res) => {
    let users = userController.getUsers();
    res.render('showUsers', { currentRoute, users });
});

module.exports = router;
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const { route } = require('.');

router.get('/', userController.getUsers);

router.get('/users', (req, res) => {
    let users = userController.getUsers();
    res.render('showUsers', { currentRoute: '/users', users});
});

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);

router.get('/users', (req, res) => {
    let users = userController.getUsers();
    res.render('showUsers', { currentRoute: '/users', users});
});

router.get('/users', (req, res) => {
    res.render('showUsers', { currentRoute: '/users'});
});

router.get('/viewUsers/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    res.render('viewUser',{currentRoute: '', userId});
});



module.exports = router;
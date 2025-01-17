const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const currentRoute = '/users';


router.get('/users', (req, res) => {
    let users = userController.getUsers();
    res.render('showUsers', { currentRoute, users });
});

router.get('/viewUsers/:id', (req, res) => {
    const user = userController.getUserById(req.params.id)
    console.log(user);
    res.render('viewUser', {currentRoute, user});
});

router.get('/createUser', (req, res) => {
    res.render('createUser', {currentRoute: '/createUser'});
});


module.exports = router;


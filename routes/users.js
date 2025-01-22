const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const currentRoute = '/users';


router.get('/users', (req, res) => {
    let users = userController.getUsers();
    res.render('showUsers', { currentRoute, users });
});

router.get('/viewUser/:id', (req, res) => {
    const user = userController.getUserById(req.params.id)
    res.render('viewUser', {currentRoute, user});
});

router.route('/createUser')
    .get((req, res) => {
        res.render('createUser', {currentRoute});
    })
    .post((req, res) => {
        userController.createUser(req, res);
        res.redirect('/users');
    });




module.exports = router;


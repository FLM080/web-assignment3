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

router.route('/editUser/:id')
    .get((req, res) => {
        const user = userController.getUserById(req.params.id)
        res.render('editUser', {currentRoute, user});
    })
    .post((req, res) => {
        const user = userController.getUserById(req.params.id)
        userController.updateUser(req,res);
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

router.get('/deleteUser/:id', (req, res) => {
    userController.deleteUser(req, res);
});



module.exports = router;


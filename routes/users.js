const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const currentRoute = '/users';

// GET users page
router.get('/users', (req, res) => {
    let users = userController.getUsers();
    res.render('showUsers', { currentRoute, users });
});

// GET user by ID
router.get('/viewUser/:id', (req, res) => {
    const user = userController.getUserById(req.params.id)
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.render('viewUser', { currentRoute, user });
    }
});

// EDIT user by ID
router.route('/editUser/:id')
    // GET edit user page
    .get((req, res) => {
        const user = userController.getUserById(req.params.id)
        
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.render('editUser', { currentRoute, user });
        }
    })
    // POST update user by ID
    .post((req, res) => {
        const user = userController.getUserById(req.params.id)
        userController.updateUser(req, res);
        res.render('viewUser', { currentRoute, user });
    });

// CREATE new user
router.route('/createUser')
    // GET create user page
    .get((req, res) => {
        res.render('createUser', { currentRoute: '/createUser' });
    })
    // POST create new user
    .post((req, res) => {
        userController.createUser(req, res);
        res.redirect('/users');
    });

// DELETE user by ID
router.get('/deleteUser/:id', (req, res) => {
    userDelete = userController.deleteUser(req, res);
    // get the user by ID
    if (!userDelete) {
        res.status(404).send('User not found');
    } else {
        res.redirect('/users');
    }
});



module.exports = router;


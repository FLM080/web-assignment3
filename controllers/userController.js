const userModel = require('../models/userModel');

function getUsers(){
    let users = userModel.getUsers();
    return users
}
function getUserById(id) {
    let users = userModel.getUsers();
    let user = users.find(user => user.id === parseInt(id));
    return user;
};

function createUser(req, res){
    const newUser = {
        id: userModel.getUsers().length + 1,
        name: req.body.name,
        surname: req.body.surname
    }
    userModel.createUser(newUser);
}

function deleteUser(req, res){
    const id = req.params.id;
    const users = userModel.getUsers();
    const user = users.find(user => user.id === parseInt(id));
    if(user){
        userModel.deleteUser(id);
    }
    res.redirect('/users');
}

function updateUser(req, res, next) {
    // 1: update user in the model
    let responseFromModel = userModel.updateUser(req.body);
    console.log('responseFrom.. works')
    // 2: if we dont find a user return an error message
    if(responseFromModel === false){
        res.send('User not found');
    }
    // 3: if the user was updated, redirect to their page
    else{
        res.redirect('/viewUsers/' + responseFromModel.id);
    }
}

function editUser(req, res, next) {
    // 1: get the user
    let user = userModel.getUser(req.params.id);
    // 2: render the edit form
    res.render('editUser', { user });
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    editUser,
    updateUser
}
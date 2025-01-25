const userModel = require('../models/userModel');

function getUsers(){
    let users = userModel.getUsers();
    return users
}

function getUserById(id) {
    let users = userModel.getUsers();
    let user = users.find(user => user.id === parseInt(id));
    return user;
}

function createUser(req, res){
    userModel.createUser(req, res);
}

function deleteUser(req, res){
    const id = req.params.id;
    const users = userModel.getUsers();
    const user = users.find(user => user.id === parseInt(id));
    if(user){
        userModel.deleteUser(id);
    }else{
        res.status(404).send('User not found');
    }
}

function updateUser(req, res){
    userModel.updateUser(req);
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}
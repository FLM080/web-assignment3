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

module.exports = {
    getUsers,
    getUserById,
    createUser
}
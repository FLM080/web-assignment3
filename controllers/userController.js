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

module.exports = {
    getUsers,
    getUserById
}
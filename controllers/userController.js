const userModel = require('../models/userModel');

function getUsers(req, res, next){
    let users = userModel.getUsers();
    return users
}


module.exports = {
    getUsers
}
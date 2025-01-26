const userModel = require("../models/userModel");

// Function to get all users
function getUsers() {
    let users = userModel.getUsers();
    return users;
}

// Function to get user by ID
function getUserById(id) {
    let users = userModel.getUsers();
    let user = users.find((user) => user.id === parseInt(id)); // find user by ID
    return user;
}

// Function to create a new user
function createUser(req, res) {
    userModel.createUser(req, res);
}

// Function to delete a user
function deleteUser(req, res) {
    const id = req.params.id; // get the ID from the request
    const users = userModel.getUsers();
    const user = users.find((user) => user.id === parseInt(id)); // find user by ID
    // check if user exists and delete it
    if (user) {
        userModel.deleteUser(id);
        return true;
    } else {
        return false;
    }
}

// Function to update a user
function updateUser(req, res) {
    userModel.updateUser(req);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
};

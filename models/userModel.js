const users = [
  { id: 1, name: "Alice", surname: "Smith" },
  { id: 2, name: "Bob", surname: "Johnson" },
  { id: 3, name: "Charlie", surname: "Williams" },
  { id: 4, name: "David", surname: "Brown" },
  { id: 5, name: "Emma", surname: "Jones" },
  { id: 6, name: "Fiona", surname: "Garcia" },
  { id: 7, name: "George", surname: "Martinez" },
  { id: 8, name: "Hannah", surname: "Davis" },
  { id: 9, name: "Ian", surname: "Rodriguez" },
  { id: 10, name: "Julia", surname: "Martinez" },
  { id: 11, name: "Kevin", surname: "Hernandez" },
  { id: 12, name: "Laura", surname: "Lopez" },
  { id: 13, name: "Mark", surname: "Gonzalez" },
  { id: 14, name: "Nina", surname: "Wilson" },
  { id: 15, name: "Oliver", surname: "Anderson" },
  { id: 16, name: "Paula", surname: "Thomas" },
  { id: 17, name: "Quincy", surname: "Taylor" },
  { id: 18, name: "Rachel", surname: "Moore" },
  { id: 19, name: "Sam", surname: "Jackson" },
  { id: 20, name: "Tina", surname: "Martin" },
  { id: 21, name: "Ulysses", surname: "Lee" },
  { id: 22, name: "Victoria", surname: "Perez" },
  { id: 23, name: "William", surname: "White" },
  { id: 24, name: "Xavier", surname: "Harris" },
  { id: 25, name: "Yasmine", surname: "Clark" }
];

// get the maximum ID from the users array so it can be used to generate the next ID even when users a deleted
let maxId = Math.max(...users.map(user => user.id));

// get the ID next to the maximum ID the model ever had
function getNextId() {
  return ++maxId;
}

// get users info
function getUsers() {
  return users;
}

// get user by ID
function getUser(id) {
  return users.find(user => user.id === parseInt(id));
}

// create new user
function createUser(req, res) {
  // create new user based on the model
  const newUser = {
    id: getNextId(), // new ID for the user
    name: req.body.name,
    surname: req.body.surname
  }
  // add to other users
  users.push(newUser);
}

// delete user by ID
function deleteUser(id) {
  // get user's index by its ID
  const index = users.findIndex(user => user.id === parseInt(id));
  // delete user with that id
  users.splice(index, 1);
}

// update user info
function updateUser(req, res) {
  // get the user updates info
  let data = req.body
  // get user's index by its ID
  const index = users.findIndex(user => user.id === parseInt(req.params.id));
  // update the user in the array
  users[index].name = data.name;
  users[index].surname = data.surname;
  // return updated user
  return users[index];
}


module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getNextId,
  getUser
}
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

function getNextId() {
    return ++maxId;
}

  function getUsers(){
    return users;
  }

  function getUser(id) {
    return users.find(user => user.id === parseInt(id));
}


  function createUser(req, res){
    const newUser = {
      id: getNextId(),
      name: req.body.name,
      surname: req.body.surname
  }
    users.push(newUser);
  }

  function deleteUser(id){
    const index = users.findIndex(user => user.id === parseInt(id));
    users.splice(index, 1);
  }

  function updateUser(req, res){
      let data = req.body
      const index = users.findIndex( user => user.id === parseInt(req.params.id));
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
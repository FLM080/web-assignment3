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

  function getUsers(){
    return users;
  }

  function createUser(user){
    users.push(user);
  }


  module.exports = {
    getUsers,
    createUser
  }
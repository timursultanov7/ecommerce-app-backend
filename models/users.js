/** @format */
// Requiring the database from heroku from the file database.js
const database = require("../database.js");

// Getting from database table users by user_name
const getAllUsers = () => {
  return database("users").select("*").orderBy("user_firstname");
};

// Adding user to database

const addUser = (user) => {
  console.log(user);
  return database("users").insert(user).returning("*");
};

const checkUser = (email) => {
  // const { user_email, user_password } = user;
  // console.log(user); //email and password that we typed

  // We want to check if this user is in the database

  // if (user)
  return database("users").select("*").where({
    user_email: email,
    // user_password: user_password,
  });
};

// Exporting the functions
module.exports = {
  getAllUsers,
  addUser,
  checkUser,
};

// app.get("/", (res, req) => {
//   const getAllUsers = () => {
//     return database("users").select("*").orderBy("user_name");
//   };

//   getAllUsers()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// });

// const getAllUsers = () => {
//   return database("users").select("*").orderBy("user_name");
// };
// const _getAllUsers = (req, res) => {
//   getAllUsers()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.json({ msg: err.message });
//     });
// };
/** @format */
// Requiring the database from heroku from the file database.js
// const database = require("../database.js");

// // Getting from database table users by user_name
// const getAllUsers = () => {
//   return database("users").select("*").orderBy("user_firstname");
// };

// // Adding user to database

// const addUser = (user) => {
//   return database("users").insert(user).returning("*");
// };

// // Exporting the functions
// module.exports = {
//   getAllUsers,
//   addUser,
// };

/** @format */

//Requiring the express node.js package to create the server
const express = require("express");

const products_router = require("./routes/productsroutes.js");
const order_router = require("./routes/orders.js");
const users_router = require("./routes/users.js");

// Creating the server
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());
// Listenting to the port 5000 in localhost
app.listen(process.env.PORT || 3005, () => {
  console.log(`listen on port ${process.env.PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", products_router);

app.use("/api/order", order_router);
app.use("/api/auth", users_router);

app.use(express.static(__dirname + "/public"));

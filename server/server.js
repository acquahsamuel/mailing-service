// const path = require("path");
// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const userRoutes = require("./routes/user");

// const app = express();

// mongoose
//   .connect(
//     ""
//   )
//   .then(() => {
//     console.log("Connected to database!");
//   })
//   .catch(() => {
//     console.log("Connection failed!");
//   });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/images", express.static(path.join("backend/images")));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );
//   next();
// });

// app.use("/api/posts", postsRoutes);
// app.use("/api/user", userRoutes);

// module.exports = app;

let faker = require("faker");
let database = { products: [] };

for (let i = 1; i <= 300; i++) {
  database.products.push({
    id: i,
    product: faker.commerce.product(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
  });
}

console.log(JSON.stringify(database));

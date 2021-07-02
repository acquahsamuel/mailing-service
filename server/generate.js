let faker = require("faker");
let database = { products: [] };

for (let i = 1; i <= 300; i++) {
  database.products.push({
    id: i,
    product: faker.commerce.product(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    quantity: faker.datatype.number(),
  });
}

console.log(JSON.stringify(database));

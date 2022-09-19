import { Manager } from "./class/Manager.js";
import express from "express";

const app = express();

const server = app.listen(8080, () => console.log("Server up!"));
server.on("error", (error) => console.log(`Error in server ${error}`));

let randomNumber = 0;
let randomProduct = [];
const manager = new Manager("data.json");

const main = async () => {
  const products = await manager.getAll();

  app.get("/", (request, response) => {
    response.send(`<ul>
                     <li><a href="http://localhost:8080/products">Products</a></li>
                     <li><a href="http://localhost:8080/random-product">Random Product</a></li>
                   </ul>`);
  });

  // - A
  app.get("/products", (request, response) => {
    response.send(products);
  });

  // - B
  app.get("/random-product", (request, response) => {
    randomNumber = Math.floor(Math.random() * products.length) + 1;
    randomProduct = products.find((product) => product.id === randomNumber);
    response.send(randomProduct);
  });
};

main();

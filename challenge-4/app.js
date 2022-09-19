import express from "express";
import productsRouter from "./routes/products.js";

const app = express();

const server = app.listen(8080, () => console.log("Server up!"));
server.on("error", (err) => console.log(`Error in server ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/products/", productsRouter);

import {
  get,
  getById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Controller.js";
import { Router } from "express";
const productsRouter = Router();

productsRouter.get("/", get);
productsRouter.get("/:id", getById);
productsRouter.post("/", addProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

export default productsRouter;

import { Products } from "../class/Products.js";

const products = new Products();

const get = async (req, res) => {
  try {
    const productsJSON = await products.get();
    if (productsJSON.length !== 0) return res.status(200).json(productsJSON);
    throw Error("Products not found!");
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const product = await products.getById(req.params.id);
    if (product) return res.status(200).json(product);
    throw Error("Product not found!");
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = req.body;
    if (product) {
      const productId = await products.addProduct(product);
      res.status(200).send(`Product [${productId}] added!`);
    } else {
      throw Error("Error adding product!");
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = req.body;
    const productId = req.params.id;
    if (product && productId) {
      await products.updateProduct(product, productId);
      res.status(200).send(`Product [${productId}] updated!`);
    } else {
      throw Error("Error adding product!");
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await products.deleteProduct(productId);
    res.status(200).send(`Product ${productId} removed!`);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

export { get, getById, addProduct, updateProduct, deleteProduct };

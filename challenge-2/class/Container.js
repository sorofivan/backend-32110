import { constants, writeFile } from "node:fs";
import { readFile, access } from "node:fs/promises";

export class Container {
  constructor(path) {
    this.path = path;
  }

  verifyFile = async () => {
    try {
      await access(this.path, constants.R_OK);
    } catch {
      writeFile(this.path, JSON.stringify([], null, 2), (err) => {
        !err && console.log("File created!");
      });
    }
  };

  lastID = async () => {
    try {
      if (this.products.length === 0) return 1;
      let newID = this.products[this.products.length - 1];
      return newID.id + 1;
    } catch (err) {
      throw err.message;
    }
  };

  isProductExist = async (id) => {
    const productExist = this.products.some((res) => res.id == id);
    return productExist;
  };

  saveProduct = async (product) => {
    try {
      await this.getAll();
      const newID = await this.lastID(this.products);
      product = { id: newID, ...product };
      this.products = [...this.products, product];
      writeFile(this.path, JSON.stringify(this.products, null, 2), (err) => {
        !err && console.log(`Product[${newID}] added successfully!`);
      });
    } catch (err) {
      throw err.message;
    }
  };

  getByID = async (id) => {
    try {
      if (await this.isProductExist(id))
        return this.products.find((res) => res.id == id);
    } catch (err) {
      throw err.message;
    }
  };

  getAll = async () => {
    try {
      if ((await readFile(this.path)) !== [])
        return (this.products = JSON.parse(await readFile(this.path)));
    } catch (err) {
      throw err.message;
    }
  };

  deleteByID = async (id) => {
    try {
      let i = 0;
      for (const product of this.products) {
        if (product.id == id) {
          this.products.splice(i, 1);
          writeFile(
            this.path,
            JSON.stringify(this.products, null, 2),
            (err) => {
              !err && console.log(`Product[${id}] removed`);
            }
          );
        }
        i = i + 1;
      }
    } catch (err) {
      throw err.message;
    }
  };

  deleteAll = async () => {
    try {
      writeFile(this.path, JSON.stringify([], null, 2), (err) => {
        !err && console.log("All products were successfully removed");
      });
    } catch (err) {
      throw err.message;
    }
  };
}

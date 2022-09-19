import { readFile } from "node:fs/promises";

export class Manager {
  constructor(path) {
    this.path = path;
  }

  getAll = async () => {
    try {
      if ((await readFile(this.path)) !== [])
        return (this.products = JSON.parse(await readFile(this.path)));
    } catch (err) {
      throw err.message;
    }
  };
}

import { Container } from "./class/Container.js";

const container = new Container("data.json");

const product1 = {
  title: "Jackson San Dimas XQ",
  price: 2743.95,
  thumbnail: "https://images2.imgbox.com/4a/0e/DZJM0XJx_o.png",
};
const product2 = {
  title: "ESP Deluxe EC-1000",
  price: 3254.87,
  thumbnail: "https://images2.imgbox.com/51/24/EaPDkjMd_o.png",
};
const product3 = {
  title: "Fender Vintage American '52",
  price: 3413.95,
  thumbnail: "https://images2.imgbox.com/a5/d5/AzoDQ4Wx_o.png",
};

const main = async () => {
  await container.verifyFile();
  await container.saveProduct(product1);
  await container.saveProduct(product2);
  await container.saveProduct(product3);
  console.log(await container.getAll());
  console.log(await container.getByID(2));
  await container.deleteByID(2);
  console.log(await container.getAll());
  await container.deleteAll();
};

main();

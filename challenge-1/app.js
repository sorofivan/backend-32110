import { User } from "./class/User.js";

// User Object //
const user = new User(
  "Ivan",
  "Sorof",
  [
    { name: "Existentialism is a Humanism", author: "Jean-Paul Sartre" },
    { name: "A Lover's Discourse: Fragments", author: "Roland Barthes" },
  ],
  ["Ringo", "Pancho"]
);

const main = () => {
  // Full Name //
  console.log(user.getFullName());

  // Pets //
  console.log(user.pets, user.countPets()); // Before add pet //
  user.addPet("Romeo");
  console.log(user.pets, user.countPets()); // After add pet //

  // Books //
  console.log(user.books); // Before add book //
  user.addBook("History of Insanity", "Michel Foucault");
  console.log(user.books); // After add book //
  console.log(user.getBookNames());
};

main();

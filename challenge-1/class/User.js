// Class User //
export class User {
  constructor(name, surname, books, pets) {
    this.name = name;
    this.surname = surname;
    this.books = books;
    this.pets = pets;
  }

  // Methods //
  getFullName() {
    return `${this.name} ${this.surname}`;
  }

  addPet(newPet) {
    this.pets = [...this.pets, newPet];
  }

  countPets() {
    return this.pets.length;
  }

  addBook(newBook, newAuthor) {
    this.books = [...this.books, { name: newBook, author: newAuthor }];
  }

  getBookNames() {
    return this.books.map((res) => res.name);
  }
}

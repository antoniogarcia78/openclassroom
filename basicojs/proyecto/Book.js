export class Book {
  constructor(title, author, description, pages, currentPage, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  readBook = (page) => {
    if (page < 1 || page > this.pages) {
      return 0;
    } else if (page < this.pages) {
      this.currentPage = page;
    } else if (page === this.pages) {
      this.currentPage = page;
      this.read = true;
    }
  };
}

const bookDigitalMarketing = new Book(
  'Marketing Digital para tontos',
  'Isra Garcia',
  'Introduccion para tontos de Marketing Digital',
  350,
  false
);
const bookNegociar = new Book(
  'Diga no para obtener un si',
  'Jim Camp',
  'Primer libro de negociacion del experto Jim Camp',
  220,
  50,
  false
);
const bookDevops = new Book(
  'Devops',
  'Autentia',
  'Introduccion a Devops creado por la empresa Autentia',
  100,
  10,
  false
);

export const books = [bookDigitalMarketing, bookDevops, bookNegociar];

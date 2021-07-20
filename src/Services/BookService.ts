import { Book } from "../Books/Book"
import { IBook } from "../Interfaces/IBook"

class BookService {
  returnBookAsJsonStringify () {
    const book: IBook = new Book("O Alquimista",1988,"Paulo Coelho");
    return JSON.stringify(book.getBook());
  }
}

export { BookService }
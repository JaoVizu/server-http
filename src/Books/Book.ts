
class Book {
  title: string;
  year: number;
  author: string;

  constructor(title: string, year: number, author: string) {
    this.title = title;
    this.year = year;
    this.author = author;
  }

  getBook () {
    return {
      title: this.title,
      year: this.year,
      author: this.author
    }
  }
}

export { Book }
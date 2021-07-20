"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author;
    }
    Book.prototype.getBook = function () {
        return {
            title: this.title,
            year: this.year,
            author: this.author
        };
    };
    return Book;
}());
exports.Book = Book;

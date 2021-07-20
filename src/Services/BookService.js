"use strict";
exports.__esModule = true;
exports.BookService = void 0;
var Book_1 = require("../Books/Book");
var BookService = /** @class */ (function () {
    function BookService() {
    }
    BookService.prototype.returnBookAsJsonStringify = function () {
        var book = new Book_1.Book("O Alquimista", 1988, "Paulo Coelho");
        return JSON.stringify(book.getBook());
    };
    return BookService;
}());
exports.BookService = BookService;

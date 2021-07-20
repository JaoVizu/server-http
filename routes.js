"use strict";
exports.__esModule = true;
var BookService_1 = require("./src/Services/BookService");
var http = require("http");
var host = 'localhost';
var port = 8000;
var authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);
var requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            var bookService = new BookService_1.BookService();
            res.end(bookService.returnBookAsJsonStringify());
            break;
        case "/authors":
            res.writeHead(200);
            res.json(authors);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
};
var server = http.createServer(requestListener);
server.listen(port, host, function () {
    console.log("Server is running on http://" + host + ":" + port);
});

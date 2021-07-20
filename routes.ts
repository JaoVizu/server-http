import { BookService } from "./src/Services/BookService";

const http = require("http");
const host = 'localhost';
const port = 8000;

const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch(req.url) {
    case "/books":
      res.writeHead(200);
      const bookService = new BookService();
      res.end(bookService.returnBookAsJsonStringify());
      break;
    case "/authors":
      res.writeHead(200);
      res.json(authors)
      break;
    default: res.writeHead(404);
    res.end(JSON.stringify({error: "Resource not found"}));
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

export {}
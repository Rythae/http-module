const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let route = "./views/";

  switch (req.url) {
    case "/":
      route += "home.html";
      break;
    case "/about":
      route += "about.html";
      break;
    case "/home":
      res.writeHead(302, {
        location: "/",
      });
      break;
    case "/contact":
      route += "contact.html";
      break;
    default:
      break;
  }

  fs.readFile(route, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Page not found");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

server.listen(5000);
console.log("Server is listening at port 5000");

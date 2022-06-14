const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello, World</h1?");
  }
});
server.listen(5000);
console.log("Server is listening at port 9000");

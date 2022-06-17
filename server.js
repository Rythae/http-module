const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/about") {
    res.write(
      "<h1>Welcome to About Page!</h1>" +
        "<p>" +
        "Hi there! I'm Ree, a Lagos-based frontend developer, and an aspiring" +
        "full-stack developer. Currently started my backend development journey" +
        "as an intern at Zuri" +
        "</p>"
    );
    res.end();
  } else if (req.url === "/contact") {
    res.write(
      "<h1>Welcome to Contact Page!</h1>" +
        "<h3>You can reach me on social media via:</h3>" +
        "<p>" +
        "Github: <a>https://github.com/Rythae</a>" +
        "</p>" +
        "<p>" +
        "LinkedIn: <a>https://www.linkedin.com/in/rita-emili-4a9a97165/</a>" +
        "</p>"
    );
    res.end();
  } else if (req.url === "/") {
    res.write(
      "<h1>Welcome to Home Page!</h1> " +
        "<p>Full Name: Rita Emili</p>" +
        "<p>Job title: Backend developer</p>"
    );
    res.end();
  } else {
    // do a 302 redirect
    res.writeHead(302, {
      location: "/",
    });
    res.end();
  }
});
server.listen(5000);
console.log("Server is listening at port 5000");

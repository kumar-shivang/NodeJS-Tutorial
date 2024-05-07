const http = require("http");

let server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }
  const fs = require("fs");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening on 3000");
});

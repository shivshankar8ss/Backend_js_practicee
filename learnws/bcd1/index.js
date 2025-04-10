let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/news") {
    let obj = {
      status: 1,
      data: [
        {
          newsTitle: "ws",
          newsDes: "hello shiv ",
        },
        {
          newsTitle: "iip",
          newsDes: "hello boss ",
        },
      ],
    };
    res.end(JSON.stringify(obj));
  }
  if (req.url == "/about") {
    res.end("about");
  }
  if (req.url == "/course") {
    res.end("course");
  }
  if (req.url == "/") {
    res.end("shivshankar");
  }
});

server.listen("3000"); //http://localhost:3000

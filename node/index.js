const http = require("http");
const buffer =  Buffer.from(8); 
const buffer2 =  Buffer.alloc(4); 
console.log("🚀 ~ buffer:", buffer.write("ee", 1))


const createserver = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>This is a nodejs servezz</h2>");
  })
  .listen(3000, () => console.log("Server running successfully"));



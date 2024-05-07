// streams

const fs = require("fs");

let readstream = fs.createReadStream("./lorem.txt");
let writestream = fs.createWriteStream("./loremcopy.txt");

readstream.on("data", (chunk) => {
  console.log("new chunk recieved\n\n\n\n\n");
  console.log(chunk.toString());
  writestream.write(chunk);
});

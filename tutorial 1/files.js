const fs = require("fs");

// Reading files

fs.readFile("./file.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// Writing files

fs.writeFile("file2.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("file written");
});

// Making directories
if (!fs.existsSync("./newdir")) {
  fs.mkdir("newdir", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory created");
  });
} else {
  console.log("newdir directory already exists");
  fs.rmdir("./newdir", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory deleted");
  });
}

// deleting files

if (fs.existsSync("./file2.txt")) {
  fs.unlink("./file2.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

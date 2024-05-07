// global object

console.log(global);
global.setTimeout(() => {
  console.log("timeout");
  clearInterval(a);
}, 10000);

const a = setInterval(() => {
  console.log("interval");
}, 1000);

console.log(__dirname); // returns the directory name of current file
console.log(__filename); // returns the current file name

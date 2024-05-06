// global object

console.log(global);
global.setTimeout(() => {
  console.log("timeout");
}, 1000);

const net = require("net");
const { stdin } = require("process");
const { connect } = require("./client.js");

console.log("Connecting ...");
connect;

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = () => {

  if (data === '\u0003') {
    process.exit();
  }
}

setupInput();
const { connect } = require("./client.js");
const { setupInput } = require("./input.js");
let obj = connect();

console.log("Connecting ...");

setupInput(obj);
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {

  if (key === '\u0003') { // ctrl + c exits program
    process.exit();
  } else if (key === "w") { // 'w' moves snake up
    connection.write("Move: up");
  } else if (key === "s") { // 's' moves snake down
    connection.write("Move: down")
  } else if (key === "d") { // 'd' moves snake right
    connection.write("Move: right")
  } else if (key === "a") { // 'a' moves snake left
    connection.write("Move: left")
  }
}

module.exports = {
  setupInput,
}
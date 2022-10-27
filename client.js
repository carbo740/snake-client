const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  conn.on("connect", (client) => {
    console.log("Sucessfully connected to game server");
    conn.write("Name: CBA");
    setInterval(() => {conn.write("Move: up")}, 50);
  })

  
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = {
  connect,
}

connect();

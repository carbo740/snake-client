const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", (client) => {
    console.log("Sucessfully connected to game server");
    conn.write("Name: CBA");
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


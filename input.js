let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;

};

const handleUserInput = function(key) {
  if (key === "w") {
    connection.write('Move: up');
    connection.write('Say: Yey');

  } else if (key === 's') {
    connection.write('Move: down');
    connection.write('Say: HA!');

  } else if (key === 'a') {
    connection.write('Move: left');
    connection.write('Say: Rrr');

  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === "\u0003") {
    process.exit();
  }
};


module.exports = setupInput;

// play.js
// const stdin = process.stdin;
const net = require('net');
// const setupInput = require('./input');




const connect = function() {

  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542

  });

  conn.setEncoding('utf8');
  // stdin.setEncoding('utf8');

  conn.on('connect', function() {
    conn.write('Name: SER');

  });

  // for (let i = 0; i < 1000; i++) {
  //   setTimeout(() => {
  //     conn.write('');
  //   }, i * 50);

  //   setTimeout(() => {
  //     conn.write('Name: SER');
  //     conn.write('Move: left');
  //   }, i * 70);

  //   setTimeout(() => {
  //     conn.write('Name: SER');
  //     conn.write('Move: down');
  //   }, i * 40);

  //   setTimeout(() => {
  //     conn.write('Name: SER');
  //     conn.write('Move: right');
  //   }, i * 150);

  // }

  // conn.on('connect', function() {
  //   conn.write('Move: up');
  // });


  conn.on('connect', function() {
    console.log('connnectteddd.');
  });

  return conn;

};

// connect();

module.exports = connect;

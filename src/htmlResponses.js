const fs = require('fs');
const path = require('path');

const getIndex = (request, response) => {
  const filePath = path.resolve(__dirname, '../client/client.html');
  fs.readFile(filePath, (err, data) => {
    if (err) { // if an error slides in handle it
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Internal Server Error</h1>'); //if something goes wrong, show this so its obvious
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
};

const getClient2 = (request, response) => { //get the client2.html file
  const filePath = path.resolve(__dirname, '../client/client2.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Internal Server Error</h1>');  
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
};

const getClient3 = (request, response) => { //get the client3.html file
  const filePath = path.resolve(__dirname, '../client/client3.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>Internal Server Error</h1>'); 
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
};

module.exports = {
  getIndex,
  getClient2,
  getClient3,
};

const fs = require('fs');
const path = require('path');

const getIndex = (request, response) => {
  const filePath = path.resolve(__dirname, '../client/client.html');
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

const getClient2 = (request, response) => {
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

const getClient3 = (request, response) => {
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

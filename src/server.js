const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(`Received request for: ${request.url}`);

  switch (request.url) {
    case '/': //serve the base HTML page
      htmlHandler.getIndex(request, response);
      break;

    case '/party.mp4': //serve the party.mp4 video
      mediaHandler.getParty(request, response);
      break;

    case '/bling.mp3': //serve the bling.mp3 audio
      mediaHandler.getBling(request, response);
      break;

    case '/bird.mp4': //serve the bird.mp4 video
      mediaHandler.getBird(request, response);
      break;

    case '/page2': //serve the client2.html page
      htmlHandler.getClient2(request, response);
      break;

    case '/page3': //serve the client3.html page
      htmlHandler.getClient3(request, response);
      break;

    default: //serve a 404 page for anything not listed above
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('404 Not Found');
      response.end();
      break;
  }
};

//start the server
http.createServer(onRequest).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

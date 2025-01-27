const path = require('path');
const fs = require('fs');

const streamFile = (filePath, request, response, contentType) => {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        response.writeHead(404);
        response.end('File not found');
        return; // return to stop the linter from complaining (works without it)
      }
      response.writeHead(500);
      response.end('Internal Server Error');
      return;
    }

    let { range } = request.headers;

    if (!range) {
      range = 'bytes=0-';
    }

    const positions = range.replace(/bytes=/, '').split('-');
    let start = parseInt(positions[0], 10);
    const total = stats.size;
    const end = positions[1] ? parseInt(positions[1], 10) : total - 1;

    if (start > end) {
      start = end - 1;
    }

    const chunkSize = (end - start) + 1;

    response.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${total}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': contentType,
    });

    const stream = fs.createReadStream(filePath, { start, end });

    stream.on('open', () => {
      stream.pipe(response);
    });

    stream.on('error', (streamErr) => {
      response.end(streamErr);
    });
  });
};

// handles the party video
const getParty = (request, response) => {
  const filePath = path.resolve(__dirname, '../client/party.mp4');
  streamFile(filePath, request, response, 'video/mp4');
};
// handles the bling audio
const getBling = (request, response) => {
  const filePath = path.resolve(__dirname, '../client/bling.mp3');
  streamFile(filePath, request, response, 'audio/mpeg');
};
// handles the bird video
const getBird = (request, response) => {
  const filePath = path.resolve(__dirname, '../client/bird.mp4');
  streamFile(filePath, request, response, 'video/mp4');
};
// export the functions
module.exports = {
  getParty,
  getBling,
  getBird,
};

import http from 'http';
import socket from 'socket.io'
;

import app from './app';

const server = http.createServer(app);

const io = socket(server, { origins: '*:*' });

io.on('connection', (socket) => {
  console.log('We have a new connection');

  socket.on('disconnect', () => {
    console.log('User has left!!!');
  });
});

server.listen(3333);

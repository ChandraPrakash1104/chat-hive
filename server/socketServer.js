const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require('./socketHandler/newConnectionHander');
const disconnectHandler = require('./socketHandler/disconnectHandler');
const serverStore = require('./serverStore');

const registerSocketServer = (server) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  serverStore.setSocketServerInstance(io);

  io.use((socket, next) => {
    authSocket(socket, next);
  });

  const emitOnlineUsers = () => {
    const onlineUsers = serverStore.getOnlineUsers();

    io.emit('online-users', { onlineUsers });
  };

  io.on('connection', (socket) => {
    console.log('user connected');
    console.log(socket.id);

    newConnectionHandler(socket, io);
    emitOnlineUsers();

    socket.on('disconnect', () => {
      disconnectHandler(socket);
    });
  });

  setInterval(() => {
    emitOnlineUsers();
  }, [8000]);
};

module.exports = {
  registerSocketServer,
};

import { Server } from 'Socket.IO';
import {
  createSmartBulb,
  createSmartOutlet,
  createSmartTemperatureSensor,
} from '../../../mockedAPIdata/devicesDetails';

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      let updateInterval;

      socket.on('refresh-SmartBulb', () => {
        updateInterval = setInterval(() => {
          socket.emit('update-SmartBulb', createSmartBulb());
        }, 3000);
      });

      socket.on('stop-refreshing', () => {
        clearInterval(updateInterval);
      });

      socket.on('refresh-SmartOutlet', () => {
        socket.emit('update-SmartOutlet', SmartOutlet);
      });
      socket.on('refresh-SmartTemperatureSensor', () => {
        socket.emit('update-SmartTemperatureSensor', SmartTemperatureSensor);
      });
    });
  }
  res.end();
};

export default SocketHandler;
